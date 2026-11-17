#!/usr/bin/env python3
"""
reference(원본)와 구현본을 비교해 차이를 보고합니다. 차이가 하나라도 있으면 종료 코드 1.

사용법:
  pip install playwright pillow && python -m playwright install chromium
  python tools/verify.py --ref http://localhost:8001/ --target http://localhost:3000/

비교 항목 (폭 1440 / 768 / 390 각각):
  1. 블록(header·section·footer)별 화면 텍스트(innerText)
  2. 링크(텍스트, href, target), 이미지(src 파일명, alt)
  3. 텍스트가 있는 모든 요소의 계산된 스타일과 위치·크기
     (font-family, font-size, font-weight, line-height, letter-spacing, color, 위치/크기)
  4. 전체 페이지 스크린샷 픽셀 비교 (diff 이미지는 --out 폴더에 저장)
"""
import argparse, json, os, sys
from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright

WIDTHS = [1440, 768, 390]

JS = r'''() => {
  const root = document.body.querySelector(':scope > div') || document.body;
  const blocks = [...root.querySelectorAll(':scope > header, :scope > section, :scope > footer')];
  const norm = s => (s || '').replace(/\s+/g, ' ').trim();
  const r = n => Math.round(n);
  const blockData = blocks.map(b => norm(b.innerText));
  const links = [...root.querySelectorAll('a')].map(a => [norm(a.innerText), a.getAttribute('href'), a.getAttribute('target') || '', a.getAttribute('rel') || '']);
  const imgs = [...root.querySelectorAll('img')].map(i => [(i.getAttribute('src') || '').split('/').pop().split('?')[0], i.getAttribute('alt')]);
  const els = [];
  const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let n;
  while ((n = w.nextNode())) {
    const own = [...n.childNodes].filter(c => c.nodeType === 3).map(c => c.textContent).join('');
    if (!norm(own)) continue;
    const cs = getComputedStyle(n), b = n.getBoundingClientRect();
    els.push({text: norm(own).slice(0, 40), ff: cs.fontFamily, fs: cs.fontSize, fw: cs.fontWeight,
      lh: cs.lineHeight, ls: cs.letterSpacing, color: cs.color,
      box: [r(b.left), r(b.top + window.scrollY), r(b.width), r(b.height)]});
  }
  const fonts = {pretendard: document.fonts.check('16px Pretendard'), serif: document.fonts.check('700 16px "Noto Serif KR"')};
  return {blocks: blockData, links, imgs, els, fonts};
}'''


def capture(pg, url, width, shot):
    pg.set_viewport_size({'width': width, 'height': 900})
    pg.goto(url, wait_until='networkidle')
    pg.evaluate('document.fonts.ready.then(() => true)')
    pg.wait_for_timeout(400)
    data = pg.evaluate(JS)
    pg.screenshot(path=shot, full_page=True)
    return data


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--ref', required=True)
    ap.add_argument('--target', required=True)
    ap.add_argument('--out', default='verify-out')
    ap.add_argument('--max-pixel-ratio', type=float, default=0.0, help='허용할 다른 픽셀 비율 (기본 0)')
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)
    problems = []
    with sync_playwright() as p:
        br = p.chromium.launch()
        pg = br.new_page(device_scale_factor=1)
        for wd in WIDTHS:
            rs, ts = f'{a.out}/ref-{wd}.png', f'{a.out}/target-{wd}.png'
            R, T = capture(pg, a.ref, wd, rs), capture(pg, a.target, wd, ts)
            tag = f'[{wd}px]'
            for k in ('pretendard', 'serif'):
                if R['fonts'][k] != T['fonts'][k]:
                    problems.append(f'{tag} 폰트 로드 상태 다름: {k} ref={R["fonts"][k]} target={T["fonts"][k]}')
            if len(R['blocks']) != len(T['blocks']):
                problems.append(f'{tag} 블록 수 다름: ref={len(R["blocks"])} target={len(T["blocks"])}')
            for i, (x, y) in enumerate(zip(R['blocks'], T['blocks'])):
                if x != y:
                    j = next((k for k in range(min(len(x), len(y))) if x[k] != y[k]), min(len(x), len(y)))
                    problems.append(f'{tag} 블록 {i} 텍스트 다름 (위치 {j}): ref="…{x[max(0,j-20):j+30]}…" target="…{y[max(0,j-20):j+30]}…"')
            if R['links'] != T['links']:
                for x in R['links']:
                    if x not in T['links']: problems.append(f'{tag} 링크 누락/변경: {x}')
                for y in T['links']:
                    if y not in R['links']: problems.append(f'{tag} 링크 추가/변경: {y}')
            if R['imgs'] != T['imgs']:
                problems.append(f'{tag} 이미지 다름: ref={R["imgs"]} target={T["imgs"]}')
            if len(R['els']) != len(T['els']):
                problems.append(f'{tag} 텍스트 요소 수 다름: ref={len(R["els"])} target={len(T["els"])}')
            for i, (x, y) in enumerate(zip(R['els'], T['els'])):
                diff = [k for k in ('text', 'ff', 'fs', 'fw', 'lh', 'ls', 'color', 'box') if x[k] != y[k]]
                if diff:
                    problems.append(f'{tag} 요소 #{i} "{x["text"]}" 다름: ' + ', '.join(f'{k}: {x[k]} → {y[k]}' for k in diff))
            ri, ti = Image.open(rs).convert('RGB'), Image.open(ts).convert('RGB')
            if ri.size != ti.size:
                problems.append(f'{tag} 페이지 크기 다름: ref={ri.size} target={ti.size}')
                h = min(ri.height, ti.height); ri, ti = ri.crop((0, 0, ri.width, h)), ti.crop((0, 0, ti.width, h))
            d = ImageChops.difference(ri, ti)
            bbox = d.getbbox()
            if bbox:
                hist = d.convert('L').histogram()
                px = sum(hist) - hist[0]
                ratio = px / (d.width * d.height)
                d.point(lambda v: 255 if v else 0).save(f'{a.out}/diff-{wd}.png')
                if ratio > a.max_pixel_ratio:
                    problems.append(f'{tag} 픽셀 차이 {ratio:.5%} (영역 {bbox}) → {a.out}/diff-{wd}.png')
        br.close()
    if problems:
        print(f'차이 {len(problems)}건')
        for x in problems[:300]: print(' -', x)
        sys.exit(1)
    print('완전 일치: 텍스트·링크·이미지·계산된 스타일·위치·픽셀 모두 동일 (1440/768/390)')


if __name__ == '__main__':
    main()
