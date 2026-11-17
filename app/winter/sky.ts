import type { CSSProperties } from 'react';

// 시안 C1·C2의 눈송이/별 배치. 원본과 같은 시드·난수식이라 서버·클라이언트 렌더 결과가 같습니다.
const CONFIG = {
  c1: { seed: 7, flakes: 42, flakeSize: 6, flakeOpacity: 0.35, flakeDur: 9, stars: 34, starTop: 90, starDelay: 3 },
  c2: { seed: 21, flakes: 36, flakeSize: 5, flakeOpacity: 0.3, flakeDur: 10, stars: 40, starTop: 70, starDelay: 2.6 },
};

export function sky(variant: keyof typeof CONFIG) {
  const c = CONFIG[variant];
  let seed = c.seed;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const flakes: CSSProperties[] = Array.from({ length: c.flakes }, () => {
    const size = (2 + rnd() * c.flakeSize).toFixed(1) + 'px';
    return {
      left: (rnd() * 100).toFixed(1) + '%', top: (-rnd() * 1000).toFixed(0) + 'px', width: size, height: size,
      opacity: (c.flakeOpacity + rnd() * 0.6).toFixed(2), animationDuration: (c.flakeDur + rnd() * 10).toFixed(1) + 's',
      animationDelay: '-' + (rnd() * 12).toFixed(1) + 's',
    };
  });
  const stars: CSSProperties[] = Array.from({ length: c.stars }, () => {
    const size = (1.5 + rnd() * 2.5).toFixed(1) + 'px';
    return {
      left: (rnd() * 100).toFixed(1) + '%', top: (rnd() * c.starTop).toFixed(1) + '%', width: size, height: size,
      animationDelay: '-' + (rnd() * c.starDelay).toFixed(1) + 's',
    };
  });
  return { flakes, stars };
}
