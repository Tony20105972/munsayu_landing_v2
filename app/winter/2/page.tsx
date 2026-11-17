import type { Metadata } from 'next';
import CampBody from '../CampBody';
import SectionNav from '../SectionNav';
import { sky } from '../sky';

export const metadata: Metadata = {
  title: '문해와 사유 | 2027 윈터캠프 — 초5·6 문해·사유 집중 과정',
};

// 시안 C2 — 3D 계단
export default function Page() {
  const { flakes, stars } = sky('c2');
  return (
    <div className="wc wc-c2" style={{width: '100%', fontFamily: "'Noto Sans KR', Arial, sans-serif", color: '#FFFFFF', background: '#060440'}}>
      <section style={{position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 84% 4%, #4433FF 0%, #2A1BE0 26%, #140C9E 52%, #08065A 80%, #060440 100%)'}}>
        {stars.map((st, i) => <span key={i} className="tw" aria-hidden="true" style={st} />)}
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{position: 'absolute', inset: '0', width: '100%', height: '100%'}}>
          <defs>
            <filter id="fwglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <radialGradient id="core" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#8FB2FF" stopOpacity="0" /></radialGradient>
          </defs>
          <g transform="translate(1010 190)" filter="url(#fwglow)"><g className="fw" stroke="#9DBBFF" strokeWidth="3" strokeLinecap="round"><line x1="14" y1="0" x2="70" y2="0" /><line x1="13" y1="6" x2="63" y2="30" /><line x1="9" y1="11" x2="44" y2="55" /><line x1="3" y1="14" x2="16" y2="68" /><line x1="-3" y1="14" x2="-16" y2="68" /><line x1="-9" y1="11" x2="-44" y2="55" /><line x1="-13" y1="6" x2="-63" y2="30" /><line x1="-14" y1="0" x2="-70" y2="0" /><line x1="-13" y1="-6" x2="-63" y2="-30" /><line x1="-9" y1="-11" x2="-44" y2="-55" /><line x1="-3" y1="-14" x2="-16" y2="-68" /><line x1="3" y1="-14" x2="16" y2="-68" /><line x1="9" y1="-11" x2="44" y2="-55" /><line x1="13" y1="-6" x2="63" y2="-30" /></g><circle r="16" fill="url(#core)" /></g>
          <g transform="translate(1300 120) scale(1.35)" filter="url(#fwglow)"><g className="fw" stroke="#C9D6FF" strokeWidth="2.4" strokeLinecap="round" style={{animationDelay: '-1.1s'}}><line x1="10" y1="0" x2="48" y2="0" /><line x1="8" y1="5" x2="40" y2="26" /><line x1="4" y1="9" x2="20" y2="44" /><line x1="-1" y1="10" x2="-7" y2="48" /><line x1="-7" y1="8" x2="-31" y2="36" /><line x1="-10" y1="3" x2="-46" y2="14" /><line x1="-10" y1="-3" x2="-46" y2="-14" /><line x1="-7" y1="-8" x2="-31" y2="-36" /><line x1="-1" y1="-10" x2="-7" y2="-48" /><line x1="4" y1="-9" x2="20" y2="-44" /><line x1="8" y1="-5" x2="40" y2="-26" /></g><circle r="12" fill="url(#core)" /></g>
          <g transform="translate(860 110) scale(0.7)" filter="url(#fwglow)"><g className="fw" stroke="#FFE38A" strokeWidth="3" strokeLinecap="round" style={{animationDelay: '-0.6s'}}><line x1="10" y1="0" x2="48" y2="0" /><line x1="8" y1="5" x2="40" y2="26" /><line x1="4" y1="9" x2="20" y2="44" /><line x1="-1" y1="10" x2="-7" y2="48" /><line x1="-7" y1="8" x2="-31" y2="36" /><line x1="-10" y1="3" x2="-46" y2="14" /><line x1="-10" y1="-3" x2="-46" y2="-14" /><line x1="-7" y1="-8" x2="-31" y2="-36" /><line x1="-1" y1="-10" x2="-7" y2="-48" /><line x1="4" y1="-9" x2="20" y2="-44" /><line x1="8" y1="-5" x2="40" y2="-26" /></g></g>
        </svg>
        <header style={{position: 'relative', maxWidth: '1320px', margin: '0 auto', padding: '24px', display: 'flex', alignItems: 'center', gap: '12px'}}>
          <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#D9D3F7" /><circle cx="20" cy="20" r="14" fill="#3E9C86" /><circle cx="20" cy="20" r="9" fill="#3F5E9E" /><circle cx="20" cy="20" r="5" fill="#F4C04E" /></svg>
          <b style={{fontSize: '19px', fontWeight: '900'}}>문해와 사유</b><span className="wc-hide-sm" style={{fontSize: '12px', letterSpacing: '3px', color: '#B7D0FF'}}>WINTER CAMP 2027</span>
        </header>
        <div style={{position: 'relative', maxWidth: '1320px', margin: '0 auto', padding: '40px 24px 72px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px'}}>
          <div style={{flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: '1'}}>
            <span style={{fontFamily: "'Black Han Sans', sans-serif", fontSize: 'clamp(26px, 3.2vw, 46px)', lineHeight: '1.3', background: 'linear-gradient(90deg, #6EA6FF, #B7D0FF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>한 계단씩 오르는 겨울, 쌓이는 문해력!</span>
            <span style={{fontFamily: "'Black Han Sans', sans-serif", fontSize: 'clamp(26px, 3.2vw, 46px)', lineHeight: '1.3', background: 'linear-gradient(90deg, #6EA6FF, #B7D0FF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>읽고 쓰고 고쳐 쓰는 4주의 완성</span>
            <span className="ex-g" style={{marginTop: '28px', fontFamily: "'Black Han Sans', sans-serif", fontSize: 'clamp(76px, 10vw, 150px)', lineHeight: '1', letterSpacing: '2px'}}>2027</span>
            <span className="ex-g" style={{marginTop: '6px', fontFamily: "'Black Han Sans', sans-serif", fontSize: 'clamp(92px, 13.5vw, 200px)', lineHeight: '1.02', letterSpacing: '-6px'}}>윈터캠프</span>
            <dl style={{margin: '40px 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px 24px', fontSize: '20px', maxWidth: '840px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}><dt style={{background: '#2147F0', borderRadius: '999px', padding: '8px 20px', fontSize: '17px', fontWeight: '700', flex: 'none'}}>모집 대상</dt><dd style={{margin: '0', fontWeight: '900'}}>초5·6</dd></div>
              <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}><dt style={{background: '#2147F0', borderRadius: '999px', padding: '8px 20px', fontSize: '17px', fontWeight: '700', flex: 'none'}}>운영 기간</dt><dd style={{margin: '0', fontWeight: '900'}}>1. 5. ~ 1. 29. [4주 완성]</dd></div>
              <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}><dt style={{background: '#2147F0', borderRadius: '999px', padding: '8px 20px', fontSize: '17px', fontWeight: '700', flex: 'none'}}>모집 정원</dt><dd style={{margin: '0', fontWeight: '900'}}>반당 10명 이하</dd></div>
              <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}><dt style={{background: '#2147F0', borderRadius: '999px', padding: '8px 20px', fontSize: '17px', fontWeight: '700', flex: 'none'}}>수업 시간</dt><dd style={{margin: '0', fontWeight: '900'}}>화~금 09:00~13:00</dd></div>
            </dl>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px'}}>
              <a href="tel:025635972" style={{minHeight: '76px', padding: '10px 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#D93654', borderRadius: '6px', textDecoration: 'none', boxShadow: '0 10px 30px rgba(217,54,84,.45)'}}><span style={{fontSize: '14px', fontWeight: '700', opacity: '0.9'}}>대치본원 전화 문의</span><span style={{fontSize: '24px', fontWeight: '900', letterSpacing: '0.5px'}}>02-563-5972</span></a>
              <a href="tel:0317135972" style={{minHeight: '76px', padding: '10px 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#FFFFFF', color: '#14204A', borderRadius: '6px', textDecoration: 'none'}}><span style={{fontSize: '14px', fontWeight: '700', color: '#4B5675'}}>분당 수내점 전화 문의</span><span style={{fontSize: '24px', fontWeight: '900', letterSpacing: '0.5px'}}>031-713-5972</span></a>
              <a href="#kakao" style={{minHeight: '76px', padding: '10px 26px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: '10px', background: '#FEE500', color: '#191919', borderRadius: '6px', fontSize: '19px', fontWeight: '900', textDecoration: 'none'}}>카카오 채널 문의 <span aria-hidden="true">›</span></a>
            </div>
          </div>
          <div style={{flex: '1 1 360px', minWidth: '0', display: 'flex', justifyContent: 'center'}}>
            <svg viewBox="190 -110 480 700" role="img" aria-label="1주부터 4주까지 오르는 입체 계단과 꼭대기의 트로피" style={{width: '100%', maxWidth: '500px', height: 'auto'}}>
              <defs>
                <linearGradient id="top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#EEF2FF" /><stop offset="1" stopColor="#B9C8FF" /></linearGradient>
                <linearGradient id="front" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7A8BFF" /><stop offset="1" stopColor="#3B44D6" /></linearGradient>
                <linearGradient id="side" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3540C4" /><stop offset="1" stopColor="#1A1F80" /></linearGradient>
                <linearGradient id="cup" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7A4A00" /><stop offset="0.22" stopColor="#E9A825" /><stop offset="0.42" stopColor="#FFF2BF" /><stop offset="0.6" stopColor="#F6C445" /><stop offset="1" stopColor="#8A5600" /></linearGradient>
                <linearGradient id="rim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6B4100" /><stop offset="1" stopColor="#C98A12" /></linearGradient>
                <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stopColor="#FFE9A8" stopOpacity="0.75" /><stop offset="1" stopColor="#FFE9A8" stopOpacity="0" /></radialGradient>
              </defs>
              <ellipse cx="430" cy="560" rx="230" ry="40" fill="#020230" opacity="0.45" />
              <polygon points="604.4,426.6 550.7,457.6 550.7,178.6 604.4,147.6" fill="url(#side)" />
              <polygon points="411.1,377.0 550.7,457.6 550.7,178.6 411.1,98.0" fill="url(#front)" />
              <polygon points="464.8,67.0 604.4,147.6 550.7,178.6 411.1,98.0" fill="url(#top)" />
              <polygon points="550.7,457.6 497.0,488.6 497.0,277.8 550.7,246.8" fill="url(#side)" />
              <polygon points="357.4,408.0 497.0,488.6 497.0,277.8 357.4,197.2" fill="url(#front)" />
              <polygon points="411.1,166.2 550.7,246.8 497.0,277.8 357.4,197.2" fill="url(#top)" />
              <polygon points="497.0,488.6 443.3,519.6 443.3,377.0 497.0,346.0" fill="url(#side)" />
              <polygon points="303.7,439.0 443.3,519.6 443.3,377.0 303.7,296.4" fill="url(#front)" />
              <polygon points="357.4,265.4 497.0,346.0 443.3,377.0 303.7,296.4" fill="url(#top)" />
              <polygon points="443.3,519.6 389.6,550.6 389.6,476.2 443.3,445.2" fill="url(#side)" />
              <polygon points="250.0,470.0 389.6,550.6 389.6,476.2 250.0,395.6" fill="url(#front)" />
              <polygon points="303.7,364.6 443.3,445.2 389.6,476.2 250.0,395.6" fill="url(#top)" />
              <g fontFamily="Black Han Sans, sans-serif" fontSize="34" fill="#FFFFFF">
                <text transform="matrix(0.866 0.5 0 1 263.4 437.5)">1주</text>
                <text transform="matrix(0.866 0.5 0 1 317.1 338.3)">2주</text>
                <text transform="matrix(0.866 0.5 0 1 370.8 239.1)">3주</text>
                <text transform="matrix(0.866 0.5 0 1 424.5 139.9)">4주</text>
              </g>
              <circle cx="508" cy="20" r="120" fill="url(#halo)" />
              <ellipse cx="508" cy="118" rx="48" ry="14" fill="#5C3900" />
              <path d="M462 92 L554 92 L556 118 Q508 134 460 118 Z" fill="url(#cup)" />
              <ellipse cx="508" cy="92" rx="46" ry="12" fill="#F6CF62" />
              <path d="M497 92 L500 50 L516 50 L519 92 Z" fill="url(#cup)" />
              <ellipse cx="508" cy="50" rx="18" ry="6" fill="#C98A12" />
              <path d="M454 -64 C452 -30 456 -4 470 14 C482 30 496 40 508 44 C520 40 534 30 546 14 C560 -4 564 -30 562 -64 Z" fill="url(#cup)" />
              <path d="M456 -50 C414 -54 412 0 466 10" fill="none" stroke="url(#cup)" strokeWidth="11" strokeLinecap="round" />
              <path d="M560 -50 C602 -54 604 0 550 10" fill="none" stroke="url(#cup)" strokeWidth="11" strokeLinecap="round" />
              <ellipse cx="508" cy="-64" rx="54" ry="13" fill="url(#rim)" />
              <ellipse cx="508" cy="-64" rx="54" ry="13" fill="none" stroke="#FFF2BF" strokeWidth="2.5" />
              <g transform="translate(508 -8)"><circle r="22" fill="#D9D3F7" /><circle r="16" fill="#3E9C86" /><circle r="11" fill="#3F5E9E" stroke="#FFFFFF" strokeWidth="1" /><circle r="6" fill="#F4C04E" /></g>
              <path d="M478 -48 C474 -20 480 4 492 20" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
              <path d="M590 -96 l5 13 l13 5 l-13 5 l-5 13 l-5 -13 l-13 -5 l13 -5 z" fill="#FFF3C4" />
              <path d="M430 -40 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3 z" fill="#FFF3C4" />
            </svg>
          </div>
        </div>
        {flakes.map((f, i) => <span key={i} className="flake" aria-hidden="true" style={f} />)}
        <div className="qb" style={{position: 'absolute', right: '0', bottom: '96px', width: '240px', display: 'flex', flexDirection: 'column', zIndex: '2'}}>
          <a href="#kakao" style={{background: '#FEE500', color: '#191919', padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '6px', textDecoration: 'none'}}>
            <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '19px', fontWeight: '900', lineHeight: '1.3'}}>카카오 채널<br />문의하기<span aria-hidden="true" style={{width: '34px', height: '34px', borderRadius: '50%', background: '#191919', color: '#FEE500', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '900'}}>톡</span></span>
            <span style={{fontSize: '13px'}}>「문해와 사유」 채널로 편하게 물어보세요</span>
          </a>
          <a href="tel:025635972" style={{background: '#0B0A24', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: '2px', textDecoration: 'none', borderBottom: '1px solid #23224A'}}><span style={{fontSize: '13px', color: '#B7C2E8'}}>대치본원</span><b style={{fontSize: '20px'}}>02-563-5972</b></a>
          <a href="tel:0317135972" style={{background: '#0B0A24', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: '2px', textDecoration: 'none'}}><span style={{fontSize: '13px', color: '#B7C2E8'}}>분당 수내점</span><b style={{fontSize: '20px'}}>031-713-5972</b></a>
        </div>
        <p style={{position: 'relative', maxWidth: '1320px', margin: '0 auto', padding: '0 24px 28px', fontSize: '14px', color: '#9AA6E8'}}>*대치·분당 지점별 시간표가 다르니, 자세한 내용은 아래 시간표에서 확인해 주세요.</p>
      </section>

      <SectionNav active="#1E44F5" />

      <CampBody tone="blue" />
    </div>
  );
}
