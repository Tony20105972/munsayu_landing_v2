import type { Metadata } from 'next';
import { social } from '../../og';
import CampBody from '../CampBody';
import KakaoIcon from '../KakaoIcon';
import SectionNav from '../SectionNav';
import { sky } from '../sky';

const TITLE = '문해와 사유 | 2027 윈터캠프 — 초5·6 문해·사유 집중 과정';
const DESCRIPTION = '읽고 쓰고 고쳐 쓰는 4주. 초5·6 · 대치본원 / 분당 수내점 · 2027. 1. 5. ~ 1. 29. · 화~금 09:00~13:00 · 반당 10명 이하';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...social(TITLE, DESCRIPTION),
};

// 시안 C1 — 3D 스노우볼
export default function Page() {
  const { flakes, stars } = sky('c1');
  return (
    <div className="wc wc-c1" style={{width: '100%', fontFamily: "'Noto Sans KR', Arial, sans-serif", color: '#FFFFFF', background: '#0A0840'}}>
      <section style={{position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 76% 44%, #6A4BF2 0%, #3221B8 24%, #16117A 50%, #0B0943 78%, #07062E 100%)'}}>
        {stars.map((st, i) => <span key={i} className="tw" aria-hidden="true" style={st} />)}
        <div className="wc-ribbon" style={{position: 'absolute', top: '0', right: '6%', width: '168px', height: '112px', background: '#FFF3A8', clipPath: 'polygon(0 0, 100% 0, 100% 74%, 50% 100%, 0 74%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '18px', boxSizing: 'border-box', color: '#14204A', fontWeight: '900', lineHeight: '1.25', textAlign: 'center', zIndex: '2'}}>
          <span style={{fontSize: '14px'}}>얼리버드</span><span style={{fontSize: '22px', fontFamily: "'Pretendard', sans-serif", fontWeight: '800', letterSpacing: '-0.5px'}}>12.13 마감</span>
        </div>
        <header style={{position: 'relative', maxWidth: '1320px', margin: '0 auto', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px'}}>
          <img src="/assets/logo-winter-white.png" alt="문해와 사유 — 읽고, 생각하고, 표현하다" width={900} height={193} className="wc-logo" style={{display: 'block', height: '44px', width: 'auto'}} /><span className="wc-hide-sm" style={{fontSize: '12px', letterSpacing: '3px', color: '#C9C2FF'}}>WINTER CAMP 2027</span>
        </header>
        <div style={{position: 'relative', maxWidth: '1320px', margin: '0 auto', padding: '40px 24px 96px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '32px'}}>
          <div style={{flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative', zIndex: '1'}}>
            <p style={{margin: '0 0 18px', fontSize: 'clamp(22px, 2.4vw, 34px)', lineHeight: '1.35', color: '#E7E3FF', letterSpacing: '-0.5px'}}><b style={{fontWeight: '900', color: '#FFFFFF'}}>쓰는 습관</b>을 담다, <b style={{fontWeight: '900', color: '#FFFFFF'}}>새 학년 국어</b>에 닿다!</p>
            <span className="ex-y" style={{fontFamily: "'Pretendard', sans-serif", fontSize: 'clamp(72px, 9.4vw, 140px)', fontWeight: '800', lineHeight: '1', color: '#ECE9FF', letterSpacing: '-0.02em'}}>2027</span>
            <span className="ex-d" style={{fontFamily: "'Pretendard', sans-serif", fontSize: 'clamp(84px, 12.4vw, 184px)', fontWeight: '800', lineHeight: '1.08', color: '#FFFFFF', letterSpacing: '-0.045em'}}>윈터캠프</span>
            <span style={{marginTop: '14px', fontSize: 'clamp(16px, 1.6vw, 22px)', fontWeight: '700', color: '#C9C2FF', letterSpacing: '1px'}}>초5·6 문해·사유 집중 과정 · 대치 / 분당 · 1. 5. ~ 1. 29.</span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '30px'}}>
              <span style={{minHeight: '76px', padding: '0 28px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0D0B3E', border: '1.5px solid #FFFFFF', borderRadius: '6px', fontSize: '22px', fontWeight: '900'}}>1. 5.(화) 개강</span>
              <a href="tel:025635972" style={{minHeight: '76px', padding: '10px 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#D93654', borderRadius: '6px', textDecoration: 'none', boxShadow: '0 10px 30px rgba(217,54,84,.45)'}}><span style={{fontSize: '14px', fontWeight: '700', opacity: '0.9'}}>대치본원 전화 문의</span><span style={{fontSize: '24px', fontWeight: '900', letterSpacing: '0.5px'}}>02-563-5972</span></a>
              <a href="tel:0317135972" style={{minHeight: '76px', padding: '10px 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#FFFFFF', color: '#14204A', borderRadius: '6px', textDecoration: 'none'}}><span style={{fontSize: '14px', fontWeight: '700', color: '#4B5675'}}>분당 수내점 전화 문의</span><span style={{fontSize: '24px', fontWeight: '900', letterSpacing: '0.5px'}}>031-713-5972</span></a>
            </div>
            <a href="https://pf.kakao.com/_yZKWX" target="_blank" rel="noopener" style={{marginTop: '18px', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '17px', fontWeight: '700', color: '#FFF3A8', textDecoration: 'none'}}><KakaoIcon size={30} />카카오 채널 「문해와 사유」로도 문의하실 수 있습니다 ›</a>
          </div>
          <div style={{flex: '1 1 380px', minWidth: '0', display: 'flex', justifyContent: 'center'}}>
            <svg className="globe" viewBox="0 0 600 660" role="img" aria-label="코스모 행성이 든 스노우볼과 금빛 궤도" style={{width: '100%', maxWidth: '600px', height: 'auto'}}>
              <defs>
                <radialGradient id="glass" cx="0.36" cy="0.28" r="0.8"><stop offset="0" stopColor="#FFFFFF" stopOpacity="0.42" /><stop offset="0.45" stopColor="#BDB6FF" stopOpacity="0.1" /><stop offset="0.85" stopColor="#7C6CFF" stopOpacity="0.22" /><stop offset="1" stopColor="#C9C2FF" stopOpacity="0.55" /></radialGradient>
                <radialGradient id="planet" cx="0.34" cy="0.3" r="0.75"><stop offset="0" stopColor="#FFF8D9" /><stop offset="0.4" stopColor="#F7CB5C" /><stop offset="0.8" stopColor="#D8961C" /><stop offset="1" stopColor="#9A6208" /></radialGradient>
                <linearGradient id="baseBody" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#2A1E9E" /><stop offset="0.35" stopColor="#6D5DFF" /><stop offset="0.55" stopColor="#8C80FF" /><stop offset="1" stopColor="#1F1580" /></linearGradient>
                <linearGradient id="baseTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#B2A9FF" /><stop offset="1" stopColor="#5A4AE6" /></linearGradient>
                <linearGradient id="snow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#C9D2FF" /></linearGradient>
                <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#FFE8A0" stopOpacity="0" /><stop offset="0.3" stopColor="#FFE38A" /><stop offset="0.6" stopColor="#FFF6D2" /><stop offset="1" stopColor="#F4C04E" stopOpacity="0" /></linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <clipPath id="frontHalf" clipPathUnits="userSpaceOnUse"><rect x="0" y="300" width="600" height="300" /></clipPath>
                <clipPath id="inGlobe" clipPathUnits="userSpaceOnUse"><circle cx="300" cy="290" r="226" /></clipPath>
              </defs>
              <ellipse cx="300" cy="300" rx="285" ry="285" fill="#8C78FF" opacity="0.18" filter="url(#glow)" />
              <g clipPath="url(#inGlobe)">
                <circle cx="300" cy="290" r="230" fill="#1B137A" opacity="0.55" />
                <g transform="rotate(-18 300 300)" opacity="0.5"><ellipse cx="300" cy="300" rx="168" ry="46" fill="none" stroke="#D9D3F7" strokeWidth="12" /><ellipse cx="300" cy="300" rx="142" ry="37" fill="none" stroke="#3E9C86" strokeWidth="10" /><ellipse cx="300" cy="300" rx="120" ry="30" fill="none" stroke="#7D95FF" strokeWidth="8" /></g>
                <circle cx="300" cy="300" r="84" fill="url(#planet)" />
                <ellipse cx="276" cy="268" rx="30" ry="18" fill="#FFFFFF" opacity="0.45" />
                <g transform="rotate(-18 300 300)" clipPath="url(#frontHalf)"><ellipse cx="300" cy="300" rx="168" ry="46" fill="none" stroke="#E6E1FF" strokeWidth="12" /><ellipse cx="300" cy="300" rx="142" ry="37" fill="none" stroke="#4FC2A6" strokeWidth="10" /><ellipse cx="300" cy="300" rx="120" ry="30" fill="none" stroke="#9FB2FF" strokeWidth="8" /></g>
                <ellipse cx="300" cy="500" rx="210" ry="62" fill="url(#snow)" />
                <g fill="#FFFFFF"><circle cx="190" cy="180" r="4" /><circle cx="420" cy="150" r="3" /><circle cx="380" cy="420" r="4" /><circle cx="210" cy="400" r="3" /><circle cx="470" cy="300" r="3" /><circle cx="140" cy="300" r="4" /><circle cx="330" cy="120" r="3" /><circle cx="250" cy="200" r="2.5" /></g>
                <path d="M430 210 l6 16 l16 6 l-16 6 l-6 16 l-6 -16 l-16 -6 l16 -6 z" fill="#FFF3C4" />
                <path d="M170 360 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 z" fill="#FFF3C4" />
              </g>
              <circle cx="300" cy="290" r="228" fill="url(#glass)" stroke="#D8D2FF" strokeOpacity="0.7" strokeWidth="2.5" />
              <path d="M128 200 A196 196 0 0 1 270 98" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" opacity="0.55" />
              <ellipse cx="420" cy="150" rx="18" ry="9" transform="rotate(35 420 150)" fill="#FFFFFF" opacity="0.5" />
              <ellipse cx="300" cy="512" rx="196" ry="36" fill="url(#baseTop)" />
              <path d="M104 512 L126 604 Q300 650 474 604 L496 512 Q300 560 104 512 Z" fill="url(#baseBody)" />
              <path d="M126 604 Q300 650 474 604 L470 616 Q300 664 130 616 Z" fill="#150E62" />
              <text x="300" y="590" textAnchor="middle" fontFamily="Pretendard, sans-serif" fontSize="22" fontWeight="800" letterSpacing="7" fill="#FFF3C4">WINTER CAMP 2027</text>
              <g transform="rotate(-20 300 300)" filter="url(#glow)"><ellipse cx="300" cy="300" rx="292" ry="92" fill="none" stroke="url(#gold)" strokeWidth="3" strokeDasharray="1 9" strokeLinecap="round" /><ellipse cx="300" cy="300" rx="280" ry="84" fill="none" stroke="url(#gold)" strokeWidth="1.2" opacity="0.8" /></g>
            </svg>
          </div>
        </div>
        {flakes.map((f, i) => <span key={i} className="flake" aria-hidden="true" style={f} />)}
      </section>

      <SectionNav active="#5B49E6" />

      <CampBody tone="violet" />
    </div>
  );
}
