'use client';

import { useState } from 'react';

// 시안 C1·C2가 함께 쓰는 공용 본문(CampBody). tone으로 색조만 바뀝니다.
const TONES = {
  violet: { bg: '#100C4F', card: '#1A1566', title: '#DCD6FF', muted: '#B5ADE6', accent: '#5B49E6', ring: '#6F63D9' },
  blue: { bg: '#07154F', card: '#0D1F6E', title: '#CBE6FF', muted: '#A9B7E0', accent: '#1E44F5', ring: '#4F63D9' },
};

const C = { vocab: '#2E55F0', read: '#1F7F6C', gram: '#5B49D6', write: '#C93A5B', lit: '#3F4C9E', un: '#2D5DB8', dir: '#F4C04E' };
type Cell = [day: number, row: number, span: number, label: string, sub: string, kind: keyof typeof C];
const TIMETABLE: Record<'daechi' | 'bundang', Cell[]> = {
  daechi: [
    [0,0,2,'어휘 심화','2시간 연강','vocab'],[0,2,1,'쓰기 심화','첨삭','write'],[0,3,1,'고전문학','','lit'],
    [1,0,2,'비문학 사회','2시간 연강','read'],[1,2,1,'문법 기초','','gram'],[1,3,1,'현대문학','','lit'],
    [2,0,2,'비문학 과학','2시간 연강','read'],[2,2,1,'쓰기 심화','첨삭','write'],[2,3,1,'모의 UN','','un'],
    [3,0,2,'문법 심화','2시간 연강','gram'],[3,2,1,'쓰기 심화','첨삭','write'],[3,3,1,'원장 특강','김윤환 원장','dir'],
  ],
  bundang: [
    [0,0,2,'비문학 과학','2시간 연강','read'],[0,2,1,'문법 기초','','gram'],[0,3,1,'쓰기 심화','첨삭','write'],
    [1,0,2,'어휘 심화','2시간 연강','vocab'],[1,2,1,'쓰기 심화','첨삭','write'],[1,3,1,'고전문학','','lit'],
    [2,0,2,'문법 심화','2시간 연강','gram'],[2,2,2,'비문학 사회','2시간 연강','read'],
    [3,0,1,'현대문학','','lit'],[3,1,1,'원장 특강','김윤환 원장','dir'],[3,2,1,'쓰기 심화','첨삭','write'],[3,3,1,'모의 UN','','un'],
  ],
};

export default function CampBody({ tone }: { tone: keyof typeof TONES }) {
  const t = TONES[tone];
  const [branch, setBranch] = useState<'daechi' | 'bundang'>('daechi');
  const cells = TIMETABLE[branch].map(([d, r, span, label, sub, k]) => ({
    label, sub,
    style: {gridColumn: String(d + 2), gridRow: `${r + 2} / span ${span}`, background: C[k], color: k === 'dir' ? '#14204A' : '#FFFFFF', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', textAlign: 'center', padding: '8px'} as const,
  }));
  const btn = {border: '0', padding: '14px 34px', minHeight: '48px', fontFamily: 'inherit', fontSize: '17px', fontWeight: '700', cursor: 'pointer'};
  const on = {...btn, background: t.accent, color: '#FFFFFF'};
  const off = {...btn, background: 'transparent', color: '#7C88B0'};
  const daechiBtn = branch === 'daechi' ? on : off;
  const bundangBtn = branch === 'bundang' ? on : off;
  const tableLabel = (branch === 'daechi' ? '대치본원' : '분당 수내점') + ' 윈터캠프 주간 시간표';

  return (
    <div style={{width: '100%', fontFamily: "'Noto Sans KR', Arial, sans-serif", color: '#FFFFFF', background: t.bg, overflow: 'hidden'}}>

      <svg width="0" height="0" aria-hidden="true" style={{position: 'absolute'}}>
        <defs>
          <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#DDE3F5" /></linearGradient>
          <radialGradient id="orbGold" cx="0.34" cy="0.3" r="0.75"><stop offset="0" stopColor="#FFF8DC" /><stop offset="0.4" stopColor="#F7CB5C" /><stop offset="0.8" stopColor="#C98A12" /><stop offset="1" stopColor="#7A4A00" /></radialGradient>
          <linearGradient id="coverV" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9AA9FF" /><stop offset="1" stopColor="#3A4FE0" /></linearGradient>
          <linearGradient id="coverDark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2A36B0" /><stop offset="1" stopColor="#16206E" /></linearGradient>
          <linearGradient id="silver" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#F2F4FA" /><stop offset="0.5" stopColor="#A8B0C8" /><stop offset="1" stopColor="#6E7791" /></linearGradient>
        </defs>
      </svg>

      <section className="wc-sec" style={{padding: '140px 24px 120px'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>방학이 끝나면 무엇이 남았나요?</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>이런 장면, 집에서 본 적 있으신가요</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px'}}>
            <div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px'}}><span style={{fontSize: '15px', fontWeight: '900', color: t.title}}>01</span><p style={{margin: '0', fontSize: '21px', lineHeight: '1.6', fontWeight: '700'}}>책은 다 읽었는데, 무슨 내용이었는지 말하지 못한다</p></div>
            <div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px'}}><span style={{fontSize: '15px', fontWeight: '900', color: t.title}}>02</span><p style={{margin: '0', fontSize: '21px', lineHeight: '1.6', fontWeight: '700'}}>쓰라고 하면 세 줄에서 멈춘다</p></div>
            <div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px'}}><span style={{fontSize: '15px', fontWeight: '900', color: t.title}}>03</span><p style={{margin: '0', fontSize: '21px', lineHeight: '1.6', fontWeight: '700'}}>문법 용어가 나오면 국어가 갑자기 낯설어진다</p></div>
          </div>
          <p style={{margin: '0', textAlign: 'center', fontSize: '19px', lineHeight: '1.75', color: t.muted}}>읽기와 쓰기는 따로 떨어진 기술이 아닙니다. 4주 동안 읽은 것을 글로 옮기고, 첨삭받아 고쳐 쓰며 연결합니다.</p>
        </div>
      </section>

      <section className="wc-sec" id="outcome" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>듣고 끝나는 수업이 아니라, 손으로 남기는 수업입니다.</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>4주 동안 아이가 직접 만들어 내는 것들</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px'}}>
            <div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', textAlign: 'center'}}>
              <svg width="170" height="150" viewBox="0 10 200 175" role="img" aria-label="빨간 첨삭이 들어간 원고"><g transform="rotate(-10 100 95)"><rect x="46" y="38" width="112" height="132" rx="6" fill="#B9C3E6" /></g><g transform="rotate(-4 100 95)"><rect x="44" y="30" width="112" height="132" rx="6" fill="#DDE3F5" /></g><g transform="rotate(4 100 95)"><rect x="42" y="22" width="112" height="132" rx="6" fill="url(#paper)" /><g stroke="#B9C3E6" strokeWidth="4" strokeLinecap="round"><line x1="58" y1="50" x2="138" y2="50" /><line x1="58" y1="68" x2="132" y2="68" /><line x1="58" y1="86" x2="138" y2="86" /><line x1="58" y1="104" x2="120" y2="104" /><line x1="58" y1="122" x2="134" y2="122" /></g><path d="M60 72 q10 -10 22 0 t24 0" fill="none" stroke="#D93654" strokeWidth="3.5" strokeLinecap="round" /><circle cx="126" cy="104" r="11" fill="none" stroke="#D93654" strokeWidth="3.5" /><path d="M118 14 v34 q0 8 8 8 q8 0 8 -8 v-28" fill="none" stroke="url(#silver)" strokeWidth="5" strokeLinecap="round" /></g></svg>
              <span style={{fontSize: '13px', fontWeight: '700', color: t.title}}>쓰기 심화 · 매 수업</span>
              <b style={{fontSize: '21px', lineHeight: '1.4'}}>네 갈래의 글</b>
              <span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>설명문, 논설문, 서사 중심 글, 정서 중심 글. 매 수업 쓰고, 첨삭받고, 고쳐 씁니다.</span>
            </div><div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', textAlign: 'center'}}>
              <svg width="170" height="150" viewBox="0 10 200 170" role="img" aria-label="공동 결의안 문서"><g transform="rotate(-3 100 95)"><rect x="40" y="20" width="120" height="150" rx="6" fill="url(#paper)" /><rect x="58" y="36" width="84" height="10" rx="3" fill="#2E55F0" /><g stroke="#B9C3E6" strokeWidth="4" strokeLinecap="round"><line x1="58" y1="62" x2="142" y2="62" /><line x1="58" y1="78" x2="136" y2="78" /><line x1="58" y1="94" x2="142" y2="94" /><line x1="58" y1="110" x2="112" y2="110" /></g><circle cx="128" cy="138" r="20" fill="none" stroke="#2E55F0" strokeWidth="3" /><g fill="none" stroke="#2E55F0" strokeWidth="2"><ellipse cx="128" cy="138" rx="9" ry="20" /><line x1="108" y1="138" x2="148" y2="138" /></g><path d="M60 140 q8 -10 16 0 t16 0" fill="none" stroke="#14204A" strokeWidth="2.5" strokeLinecap="round" /></g></svg>
              <span style={{fontSize: '13px', fontWeight: '700', color: t.title}}>모의 UN · 4주 과정</span>
              <b style={{fontSize: '21px', lineHeight: '1.4'}}>공동 결의안</b>
              <span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>나라를 맡아 입장문을 쓰고, 연설과 협상을 거쳐 공동 결의안을 함께 완성합니다.</span>
            </div><div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', textAlign: 'center'}}>
              <svg width="170" height="150" viewBox="0 10 200 170" role="img" aria-label="지문 구조를 정리한 도식"><rect x="34" y="22" width="132" height="148" rx="10" fill="url(#paper)" /><rect x="74" y="36" width="52" height="22" rx="5" fill="#1F7F6C" /><g stroke="#8B98D6" strokeWidth="2.5"><line x1="100" y1="58" x2="100" y2="74" /><line x1="60" y1="74" x2="140" y2="74" /><line x1="60" y1="74" x2="60" y2="88" /><line x1="100" y1="74" x2="100" y2="88" /><line x1="140" y1="74" x2="140" y2="88" /></g><rect x="44" y="88" width="32" height="18" rx="4" fill="#1C6E9A" /><rect x="84" y="88" width="32" height="18" rx="4" fill="#1C6E9A" /><rect x="124" y="88" width="32" height="18" rx="4" fill="#1C6E9A" /><g stroke="#B9C3E6" strokeWidth="4" strokeLinecap="round"><line x1="48" y1="126" x2="152" y2="126" /><line x1="48" y1="142" x2="140" y2="142" /><line x1="48" y1="158" x2="120" y2="158" /></g></svg>
              <span style={{fontSize: '13px', fontWeight: '700', color: t.title}}>비문학 · 8개 주제</span>
              <b style={{fontSize: '21px', lineHeight: '1.4'}}>지문 구조 정리</b>
              <span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>사회 4개, 과학 4개 주제의 지문을 읽고 글의 구조, 과정과 원인을 정리합니다.</span>
            </div><div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', textAlign: 'center'}}>
              <svg width="170" height="150" viewBox="0 20 200 160" role="img" aria-label="문장 성분 분석 노트"><polygon points="20,92 100,138 100,162 20,116" fill="#F4F6FD" /><g stroke="#C9D0E6" strokeWidth="1.5"><line x1="22" y1="99" x2="100" y2="144" /><line x1="22" y1="106" x2="100" y2="151" /><line x1="22" y1="113" x2="100" y2="158" /></g><polygon points="100,138 180,92 180,116 100,162" fill="url(#coverDark)" /><polygon points="20,92 100,46 180,92 100,138" fill="url(#coverV)" /><polygon points="62,92 100,70 138,92 100,114" fill="#FFFFFF" opacity="0.22" /><path d="M152 76 v-30 l10 6 l10 -6 v30" fill="#F4C04E" /></svg>
              <span style={{fontSize: '13px', fontWeight: '700', color: t.title}}>문법 기초 + 심화</span>
              <b style={{fontSize: '21px', lineHeight: '1.4'}}>문장 분석</b>
              <span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>품사 9개 체계, 문장 성분 7개에서 겹문장과 높임·피동·사동까지 직접 분석합니다.</span>
            </div>
          </div>
          <p style={{margin: '0', textAlign: 'center', fontSize: '18px', lineHeight: '1.75', color: t.muted}}>읽은 것은 정리하고, 생각한 것은 쓰고, 쓴 것은 다시 고칩니다. 겨울방학이 끝나면 아이가 쓴 글이 남습니다.</p>
        </div>
      </section>

      <section className="wc-sec" id="curriculum" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>64시간, 정규반 다섯 달이 넘는 분량입니다.</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>주 16시간, 이렇게 씁니다</h2>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <div style={{overflowX: 'auto'}}>
              <div role="img" aria-label="주 16시간 배분: 쓰기 심화 3, 문법 3, 어휘 2, 비문학 사회 2, 비문학 과학 2, 문학 2, 모의 UN 1, 원장 특강 1" style={{minWidth: '560px', display: 'flex', height: '60px', borderRadius: '12px', overflow: 'hidden', fontSize: '16px', fontWeight: '700', gap: '2px'}}>
              <div style={{flex: '3', background: '#C93A5B', display: 'flex', alignItems: 'center', paddingLeft: '16px'}}>쓰기 3</div>
              <div style={{flex: '3', background: '#5B49D6', display: 'flex', alignItems: 'center', paddingLeft: '16px'}}>문법 3</div>
              <div style={{flex: '2', background: '#2E55F0', display: 'flex', alignItems: 'center', paddingLeft: '14px'}}>어휘 2</div>
              <div style={{flex: '2', background: '#1F7F6C', display: 'flex', alignItems: 'center', paddingLeft: '14px'}}>사회 2</div>
              <div style={{flex: '2', background: '#1C6E9A', display: 'flex', alignItems: 'center', paddingLeft: '14px'}}>과학 2</div>
              <div style={{flex: '2', background: '#3F4C9E', display: 'flex', alignItems: 'center', paddingLeft: '14px'}}>문학 2</div>
              <div style={{flex: '1', background: '#2D5DB8', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>UN</div>
              <div style={{flex: '1', background: '#F4C04E', color: '#14204A', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>특강</div>
            </div>
            </div>
            <span style={{fontSize: '14px', color: t.muted}}>시간 단위 · 지점별 요일 배치는 아래 시간표에서 확인하세요</span>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0 28px', borderTop: `2px solid ${t.title}`}}><div style={{padding: '26px 22px 26px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '20px'}}>비문학 사회 <span style={{fontSize: '13px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>주 2시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>경제·법·역사 지문을 읽고 글의 구조를 정리합니다.</span></div><div style={{padding: '26px 22px 26px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '20px'}}>비문학 과학 <span style={{fontSize: '13px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>주 2시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>과학 지문과 도표를 함께 읽고 과정과 원인을 정리합니다.</span></div><div style={{padding: '26px 22px 26px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '20px'}}>쓰기 심화 <span style={{fontSize: '13px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>주 3시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>매 수업 글쓰기 → 첨삭 → 고쳐 쓰기를 한 번에 진행합니다.</span></div><div style={{padding: '26px 22px 26px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '20px'}}>어휘 심화 <span style={{fontSize: '13px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>주 2시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>한자 뜻으로 처음 보는 개념어의 뜻을 짐작하는 법을 익힙니다.</span></div><div style={{padding: '26px 22px 26px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '20px'}}>문법 기초 <span style={{fontSize: '13px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>주 1시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>품사 9개 체계와 문장 성분 7개를 분석합니다.</span></div><div style={{padding: '26px 22px 26px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '20px'}}>문법 심화 <span style={{fontSize: '13px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>주 2시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>겹문장, 높임, 피동, 사동까지 문장의 짜임을 정리합니다.</span></div><div style={{padding: '26px 22px 26px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '20px'}}>현대문학 <span style={{fontSize: '13px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>주 1시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>현대시와 현대소설을 감상합니다.</span></div><div style={{padding: '26px 22px 26px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '20px'}}>고전문학 <span style={{fontSize: '13px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>주 1시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>고전시가와 고전소설을 감상합니다.</span></div></div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '24px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}><b style={{fontSize: '26px', fontWeight: '900'}}>비문학 주차별 주제</b><p style={{margin: '0', fontSize: '16px', lineHeight: '1.75', color: t.muted}}>5·6학년 사회·과학 교과서에서 꼭 짚어야 할 단원을 주제로 골랐습니다. 그 주제를 다룬 수능·모의평가·대학 논술 지문을 초등학생 눈높이로 쉽게 풀어 써서, 교과 개념으로 사회 이슈를 이해하고 과학 원리를 따져 봅니다. 회색 글씨는 연계 교과 단원(학년-학기)입니다.</p></div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px'}}><div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px'}}><b style={{fontSize: '18px', color: t.title}}>1주</b><div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{alignSelf: 'flex-start', fontSize: '12px', fontWeight: '700', background: '#1F7F6C', borderRadius: '6px', padding: '2px 8px'}}>사회</span><b style={{fontSize: '16px', lineHeight: '1.5'}}>벌은 무거울수록 효과가 있을까?</b><span style={{fontSize: '13px', color: t.muted}}>5-1 법과 인권의 보장</span></div><div style={{height: '1px', background: 'rgba(255,255,255,0.12)'}}></div><div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{alignSelf: 'flex-start', fontSize: '12px', fontWeight: '700', background: '#1C6E9A', borderRadius: '6px', padding: '2px 8px'}}>과학</span><b style={{fontSize: '16px', lineHeight: '1.5'}}>사과는 떨어지는데 달은 왜 안 떨어질까?</b><span style={{fontSize: '13px', color: t.muted}}>6-2 계절의 변화</span></div></div><div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px'}}><b style={{fontSize: '18px', color: t.title}}>2주</b><div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{alignSelf: 'flex-start', fontSize: '12px', fontWeight: '700', background: '#1F7F6C', borderRadius: '6px', padding: '2px 8px'}}>사회</span><b style={{fontSize: '16px', lineHeight: '1.5'}}>내 바나나는 어디서 왔을까?</b><span style={{fontSize: '13px', color: t.muted}}>6-2 시장경제와 국가 간 거래</span></div><div style={{height: '1px', background: 'rgba(255,255,255,0.12)'}}></div><div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{alignSelf: 'flex-start', fontSize: '12px', fontWeight: '700', background: '#1C6E9A', borderRadius: '6px', padding: '2px 8px'}}>과학</span><b style={{fontSize: '16px', lineHeight: '1.5'}}>촛불이 탈 때 나오는 열의 정체는 뭘까?</b><span style={{fontSize: '13px', color: t.muted}}>6-2 물질의 연소</span></div></div><div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px'}}><b style={{fontSize: '18px', color: t.title}}>3주</b><div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{alignSelf: 'flex-start', fontSize: '12px', fontWeight: '700', background: '#1F7F6C', borderRadius: '6px', padding: '2px 8px'}}>사회</span><b style={{fontSize: '16px', lineHeight: '1.5'}}>중고 거래, 왜 사기 망설여질까?</b><span style={{fontSize: '13px', color: t.muted}}>6-2 시장경제와 국가 간 거래</span></div><div style={{height: '1px', background: 'rgba(255,255,255,0.12)'}}></div><div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{alignSelf: 'flex-start', fontSize: '12px', fontWeight: '700', background: '#1C6E9A', borderRadius: '6px', padding: '2px 8px'}}>과학</span><b style={{fontSize: '16px', lineHeight: '1.5'}}>스마트폰 속 반도체는 무슨 일을 할까?</b><span style={{fontSize: '13px', color: t.muted}}>6-2 전기의 이용</span></div></div><div style={{background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px'}}><b style={{fontSize: '18px', color: t.title}}>4주</b><div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{alignSelf: 'flex-start', fontSize: '12px', fontWeight: '700', background: '#1F7F6C', borderRadius: '6px', padding: '2px 8px'}}>사회</span><b style={{fontSize: '16px', lineHeight: '1.5'}}>조선 사람들은 천연두를 어떻게 이겨 냈을까?</b><span style={{fontSize: '13px', color: t.muted}}>5-2 달라지는 시대, 변화하는 생활 모습</span></div><div style={{height: '1px', background: 'rgba(255,255,255,0.12)'}}></div><div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{alignSelf: 'flex-start', fontSize: '12px', fontWeight: '700', background: '#1C6E9A', borderRadius: '6px', padding: '2px 8px'}}>과학</span><b style={{fontSize: '16px', lineHeight: '1.5'}}>눈에 안 보이는 바이러스는 어떻게 찾아낼까?</b><span style={{fontSize: '13px', color: t.muted}}>6-2 과학과 나의 진로</span></div></div></div>
          </div>
        </div>
      </section>

      <section className="wc-sec" id="plan" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>4주 동안 무엇을 배우는지 미리 보여 드립니다.</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>주차별 수업 계획</h2>
          </div>
          <div style={{overflowX: 'auto', borderRadius: '20px', padding: '20px', background: t.card, border: '1px solid rgba(255,255,255,0.12)'}}>
            <div role="table" aria-label="과목별 주차 계획" style={{minWidth: '760px', display: 'grid', gridTemplateColumns: '120px repeat(4, minmax(140px, 1fr))', gridTemplateRows: '52px repeat(5, 72px)', gap: '6px'}}>
              <div style={{gridColumn: '1', gridRow: '1', display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: '700', color: t.muted, paddingLeft: '6px'}}>과목</div>
              <div style={{gridColumn: '2', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: '900', borderBottom: `2px solid ${t.title}`}}>1주</div><div style={{gridColumn: '3', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: '900', borderBottom: `2px solid ${t.title}`}}>2주</div><div style={{gridColumn: '4', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: '900', borderBottom: `2px solid ${t.title}`}}>3주</div><div style={{gridColumn: '5', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: '900', borderBottom: `2px solid ${t.title}`}}>4주</div><div style={{gridColumn: '1', gridRow: '2', display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '900', paddingLeft: '6px'}}>문법 기초</div><div style={{gridColumn: '2', gridRow: '2', background: '#5B49D6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>품사 9개 체계</div><div style={{gridColumn: '3', gridRow: '2', background: '#5B49D6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>헷갈리는 품사 구별</div><div style={{gridColumn: '4', gridRow: '2', background: '#5B49D6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>문장 성분 7개</div><div style={{gridColumn: '5', gridRow: '2', background: '#5B49D6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>긴 문장 성분 분석</div><div style={{gridColumn: '1', gridRow: '3', display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '900', paddingLeft: '6px'}}>문법 심화</div><div style={{gridColumn: '2', gridRow: '3', background: '#5B49D6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>이어진문장(대등·종속)</div><div style={{gridColumn: '3', gridRow: '3', background: '#5B49D6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>안은문장 5가지</div><div style={{gridColumn: '4', gridRow: '3', background: '#5B49D6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>높임 표현, 시간 표현</div><div style={{gridColumn: '5', gridRow: '3', background: '#5B49D6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>피동, 사동, 부정 표현</div><div style={{gridColumn: '1', gridRow: '4', display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '900', paddingLeft: '6px'}}>현대문학</div><div style={{gridColumn: '2 / span 2', gridRow: '4', background: '#3F4C9E', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', fontSize: '15px', fontWeight: '700'}}>현대시 <span style={{fontWeight: '400', opacity: '0.8', marginLeft: '6px'}}>· 1~2주</span></div><div style={{gridColumn: '4 / span 2', gridRow: '4', background: '#3F4C9E', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', fontSize: '15px', fontWeight: '700'}}>현대소설 <span style={{fontWeight: '400', opacity: '0.8', marginLeft: '6px'}}>· 3~4주</span></div><div style={{gridColumn: '1', gridRow: '5', display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '900', paddingLeft: '6px'}}>고전문학</div><div style={{gridColumn: '2 / span 2', gridRow: '5', background: '#3F4C9E', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', fontSize: '15px', fontWeight: '700'}}>고전시가 <span style={{fontWeight: '400', opacity: '0.8', marginLeft: '6px'}}>· 1~2주</span></div><div style={{gridColumn: '4 / span 2', gridRow: '5', background: '#3F4C9E', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', fontSize: '15px', fontWeight: '700'}}>고전소설 <span style={{fontWeight: '400', opacity: '0.8', marginLeft: '6px'}}>· 3~4주</span></div><div style={{gridColumn: '1', gridRow: '6', display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '900', paddingLeft: '6px'}}>쓰기 심화</div><div style={{gridColumn: '2', gridRow: '6', background: '#C93A5B', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>설명문</div><div style={{gridColumn: '3', gridRow: '6', background: '#C93A5B', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>논설문</div><div style={{gridColumn: '4', gridRow: '6', background: '#C93A5B', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>서사 중심 글</div><div style={{gridColumn: '5', gridRow: '6', background: '#C93A5B', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', fontSize: '15px', fontWeight: '700', lineHeight: '1.4'}}>정서 중심 글</div>
            </div>
          </div>
          <p style={{margin: '-24px 0 0', fontSize: '14px', color: t.muted}}>※ 문학 작품은 확정 후 안내합니다.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: '24px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}><b style={{fontSize: '22px'}}>쓰기 심화 <span style={{fontSize: '14px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>매 수업 진행</span></b><div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}><div style={{flex: '1 1 120px', minWidth: '0', background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontSize: '13px', fontWeight: '900', color: t.title}}>STEP 1</span><b style={{fontSize: '17px'}}>글쓰기</b></div><span aria-hidden="true" style={{alignSelf: 'center', fontSize: '22px', color: '#8B98D6'}}>›</span><div style={{flex: '1 1 120px', minWidth: '0', background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontSize: '13px', fontWeight: '900', color: t.title}}>STEP 2</span><b style={{fontSize: '17px'}}>첨삭</b></div><span aria-hidden="true" style={{alignSelf: 'center', fontSize: '22px', color: '#8B98D6'}}>›</span><div style={{flex: '1 1 120px', minWidth: '0', background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontSize: '13px', fontWeight: '900', color: t.title}}>STEP 3</span><b style={{fontSize: '17px'}}>고쳐 쓰기</b></div></div><span style={{fontSize: '14px', color: t.muted}}>비문학을 듣지 않는 학생도 참여할 수 있습니다.</span></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}><b style={{fontSize: '22px'}}>모의 UN <span style={{fontSize: '14px', fontWeight: '700', color: t.title, marginLeft: '4px'}}>4주 과정</span></b><div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}><div style={{flex: '1 1 120px', minWidth: '0', background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontSize: '13px', fontWeight: '900', color: t.title}}>STEP 1</span><b style={{fontSize: '17px'}}>나라 추첨</b></div><span aria-hidden="true" style={{alignSelf: 'center', fontSize: '22px', color: '#8B98D6'}}>›</span><div style={{flex: '1 1 120px', minWidth: '0', background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontSize: '13px', fontWeight: '900', color: t.title}}>STEP 2</span><b style={{fontSize: '17px'}}>입장문 작성</b></div><span aria-hidden="true" style={{alignSelf: 'center', fontSize: '22px', color: '#8B98D6'}}>›</span><div style={{flex: '1 1 120px', minWidth: '0', background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontSize: '13px', fontWeight: '900', color: t.title}}>STEP 3</span><b style={{fontSize: '17px'}}>연설과 협상</b></div><span aria-hidden="true" style={{alignSelf: 'center', fontSize: '22px', color: '#8B98D6'}}>›</span><div style={{flex: '1 1 120px', minWidth: '0', background: t.card, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontSize: '13px', fontWeight: '900', color: t.title}}>STEP 4</span><b style={{fontSize: '17px'}}>공동 결의안</b></div></div><span style={{fontSize: '14px', color: t.muted}}>의제 예시: 바다의 플라스틱, 누가 치워야 할까?</span></div>
          </div>
        </div>
      </section>

      <section className="wc-sec" id="schedule" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>점심시간 없이, 오전에 집중합니다.</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>화~금, 오전 4시간</h2>
          </div>
          <div role="group" aria-label="지점 선택" style={{alignSelf: 'center', display: 'flex', background: '#EEF3FF', borderRadius: '12px', overflow: 'hidden'}}>
            <button type="button" aria-pressed={branch === 'daechi'} onClick={() => setBranch('daechi')} style={daechiBtn}>대치본원</button>
            <button type="button" aria-pressed={branch === 'bundang'} onClick={() => setBranch('bundang')} style={bundangBtn}>분당 수내점</button>
          </div>
          <div style={{overflowX: 'auto', borderRadius: '20px', padding: '20px', background: t.card, border: '1px solid rgba(255,255,255,0.12)'}}>
            <div role="table" aria-label={tableLabel} style={{minWidth: '700px', display: 'grid', gridTemplateColumns: '108px repeat(4, minmax(140px, 1fr))', gridTemplateRows: '56px repeat(4, 92px)', gap: '6px'}}>
              <div style={{gridColumn: '1', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: '700', color: t.muted}}>시간</div>
              <div style={{gridColumn: '2', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '900', borderBottom: `2px solid ${t.title}`}}>화</div>
              <div style={{gridColumn: '3', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '900', borderBottom: `2px solid ${t.title}`}}>수</div>
              <div style={{gridColumn: '4', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '900', borderBottom: `2px solid ${t.title}`}}>목</div>
              <div style={{gridColumn: '5', gridRow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '900', borderBottom: `2px solid ${t.title}`}}>금</div>
              <div style={{gridColumn: '1', gridRow: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700'}}>09:00<span style={{fontSize: '12px', fontWeight: '400', color: t.muted}}>~10:00</span></div>
              <div style={{gridColumn: '1', gridRow: '3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700'}}>10:00<span style={{fontSize: '12px', fontWeight: '400', color: t.muted}}>~11:00</span></div>
              <div style={{gridColumn: '1', gridRow: '4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700'}}>11:00<span style={{fontSize: '12px', fontWeight: '400', color: t.muted}}>~12:00</span></div>
              <div style={{gridColumn: '1', gridRow: '5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700'}}>12:00<span style={{fontSize: '12px', fontWeight: '400', color: t.muted}}>~13:00</span></div>
              {cells.map((c, i) => (
                <div key={i} style={c.style}><b style={{fontSize: '18px'}}>{c.label}</b><span style={{fontSize: '12px', opacity: '0.85'}}>{c.sub}</span></div>
              ))}
            </div>
          </div>
          <p style={{margin: '0', textAlign: 'center', fontSize: '15px', lineHeight: '1.7', color: t.muted}}>쓰기 심화 주 3시간 · 문법 기초 1시간, 심화 2시간 · 어휘·비문학·문법 심화는 2시간 연강 · 원장 특강 매주 금요일(대치 12:00, 분당 10:00) · 모의 UN과 원장 특강은 합반으로 진행될 수 있습니다</p>
        </div>
      </section>

      <section className="wc-sec" id="program" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>문해와 사유의 선택에는 이유가 있습니다.</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>이 캠프에만 있는 네 가지 수업</h2>
          </div>
          <div role="img" aria-label="중심 목표 '읽고 쓰고 고쳐 쓰는 4주'를 모의유엔, 원장 특강, 쓰기 심화, 문법 기초+심화가 둘러싼 구조도" style={{position: 'relative', width: 'min(100%, 720px)', aspectRatio: '1 / 1', margin: '0 auto'}}>
            <div style={{position: 'absolute', left: '13%', top: '13%', width: '74%', height: '74%', borderRadius: '50%', border: '2px dotted rgba(203,230,255,0.35)', boxSizing: 'border-box'}}></div>
            <div style={{position: 'absolute', left: '4%', top: '4%', width: '92%', height: '92%', borderRadius: '50%', border: '1px dashed rgba(203,230,255,0.18)', boxSizing: 'border-box'}}></div>
            <div style={{position: 'absolute', left: '27%', top: '27%', width: '46%', height: '46%', borderRadius: '50%', border: `1.5px solid ${t.ring}`, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6%'}}>
              <b style={{fontSize: 'clamp(17px, 2.8vw, 30px)', lineHeight: '1.4', fontWeight: '900'}}>읽고 쓰고<br />고쳐 쓰는<br />4주의 완성</b>
            </div>
            <div style={{position: 'absolute', left: '37%', top: '0', width: '26%', height: '26%', borderRadius: '50%', background: '#D5DAE6', color: '#2B3557', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '4px'}}><b style={{fontSize: 'clamp(13px, 2vw, 21px)'}}>모의유엔</b><span style={{fontSize: 'clamp(10px, 1.3vw, 14px)'}}>주 1시간</span></div>
            <div style={{position: 'absolute', left: '74%', top: '37%', width: '26%', height: '26%', borderRadius: '50%', background: t.accent, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '4px'}}><b style={{fontSize: 'clamp(13px, 2vw, 21px)'}}>원장 특강</b><span style={{fontSize: 'clamp(10px, 1.3vw, 14px)'}}>매주 금요일</span></div>
            <div style={{position: 'absolute', left: '37%', top: '74%', width: '26%', height: '26%', borderRadius: '50%', background: '#D5DAE6', color: '#2B3557', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '4px'}}><b style={{fontSize: 'clamp(13px, 2vw, 21px)'}}>쓰기 심화</b><span style={{fontSize: 'clamp(10px, 1.3vw, 14px)'}}>주 3회 첨삭</span></div>
            <div style={{position: 'absolute', left: '0', top: '37%', width: '26%', height: '26%', borderRadius: '50%', background: t.accent, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '4px'}}><b style={{fontSize: 'clamp(13px, 2vw, 21px)'}}>문법</b><span style={{fontSize: 'clamp(10px, 1.3vw, 14px)'}}>기초 + 심화</span></div>
            <span style={{position: 'absolute', left: '82%', top: '16%', width: '14px', height: '14px', borderRadius: '50%', background: t.accent}}></span>
            <span style={{position: 'absolute', left: '88%', top: '24%', width: '10px', height: '10px', borderRadius: '50%', background: '#8B98D6'}}></span>
            <span style={{position: 'absolute', left: '10%', top: '80%', width: '10px', height: '10px', borderRadius: '50%', background: '#8B98D6'}}></span>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: '0', borderTop: `2px solid ${t.title}`}}>
            <div style={{padding: '28px 28px 28px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '21px'}}>모의유엔 <span style={{fontSize: '14px', color: t.title, fontWeight: '700', marginLeft: '6px'}}>주 1시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>나라별 외교관을 맡아 4주 동안 나라 추첨 → 입장문 → 연설과 협상 → 공동 결의안까지 완성합니다.</span></div>
            <div style={{padding: '28px 28px 28px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '21px'}}>김윤환 원장 특강 <span style={{fontSize: '14px', color: t.title, fontWeight: '700', marginLeft: '6px'}}>매주 금요일</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>김윤환 원장의 지문 독해법과 논리적 글쓰기 방법론. 핵심 논지를 잡는 읽기와 근거로 설득하는 글의 구조를 직접 가르칩니다.</span></div>
            <div style={{padding: '28px 28px 28px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '21px'}}>쓰기 심화 <span style={{fontSize: '14px', color: t.title, fontWeight: '700', marginLeft: '6px'}}>주 3회</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>매 수업 글쓰기 → 첨삭 → 고쳐 쓰기. 설명문, 논설문, 서사 중심 글, 정서 중심 글을 주차별로 씁니다.</span></div>
            <div style={{padding: '28px 28px 28px 0', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)'}}><b style={{fontSize: '21px'}}>문법 기초 + 심화 <span style={{fontSize: '14px', color: t.title, fontWeight: '700', marginLeft: '6px'}}>주 3시간</span></b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>기초는 품사 9개 체계와 문장 성분 7개를, 심화는 이어진문장·안은문장, 높임·시간 표현, 피동·사동·부정 표현을 정리합니다.</span></div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', textAlign: 'center'}}>
            <span style={{fontSize: '21px', fontWeight: '700'}}>수업 구성과 반 편성, 각 원으로 바로 문의하세요</span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center'}}>
              <a href="tel:025635972" style={{background: '#D93654', color: '#FFFFFF', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', display: 'flex', flexDirection: 'column', minWidth: '200px'}}><span style={{fontSize: '13px', fontWeight: '700', opacity: '0.9'}}>대치본원</span><b style={{fontSize: '22px'}}>02-563-5972</b></a>
              <a href="tel:0317135972" style={{background: '#FFFFFF', color: '#14204A', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', display: 'flex', flexDirection: 'column', minWidth: '200px'}}><span style={{fontSize: '13px', fontWeight: '700', color: '#4B5675'}}>분당 수내점</span><b style={{fontSize: '22px'}}>031-713-5972</b></a>
              <a href="#kakao" style={{background: '#FEE500', color: '#191919', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '180px'}}><span style={{fontSize: '13px', fontWeight: '700'}}>카카오 채널</span><b style={{fontSize: '20px'}}>문해와 사유 ›</b></a>
            </div>
          </div>
        </div>
      </section>

      <section className="wc-sec" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>매주 한 가지 글쓰기를 끝까지 완성합니다.</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>4주, 네 편의 글이 쌓입니다</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0'}}>
            <div style={{borderTop: `3px solid ${t.accent}`, padding: '26px 24px 0 0', display: 'flex', flexDirection: 'column', gap: '10px'}}><span style={{fontSize: '44px', fontWeight: '900', lineHeight: '1', color: t.title}}>01</span><b style={{fontSize: '20px'}}>1주 · 설명문</b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>정확하게 풀어 설명하는 글. 문법은 품사 9개 체계와 이어진문장부터.</span></div>
            <div style={{borderTop: '3px solid rgba(255,255,255,0.25)', padding: '26px 24px 0 0', display: 'flex', flexDirection: 'column', gap: '10px'}}><span style={{fontSize: '44px', fontWeight: '900', lineHeight: '1', color: t.title}}>02</span><b style={{fontSize: '20px'}}>2주 · 논설문</b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>근거를 세워 주장하는 글. 모의 UN에서는 입장문을 씁니다.</span></div>
            <div style={{borderTop: '3px solid rgba(255,255,255,0.25)', padding: '26px 24px 0 0', display: 'flex', flexDirection: 'column', gap: '10px'}}><span style={{fontSize: '44px', fontWeight: '900', lineHeight: '1', color: t.title}}>03</span><b style={{fontSize: '20px'}}>3주 · 서사 중심 글</b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>사건과 장면을 풀어 쓰는 글. 문학은 현대소설·고전소설로 넘어갑니다.</span></div>
            <div style={{borderTop: '3px solid #F4C04E', padding: '26px 24px 0 0', display: 'flex', flexDirection: 'column', gap: '10px'}}><span style={{fontSize: '44px', fontWeight: '900', lineHeight: '1', color: '#F4C04E'}}>04</span><b style={{fontSize: '20px'}}>4주 · 정서 중심 글 · 수료</b><span style={{fontSize: '15px', lineHeight: '1.7', color: t.muted}}>생각과 감정을 담는 글. 첨삭 원고 묶음과 수료증을 받고 3월 정규반으로 이어집니다.</span></div>
          </div>
          <p style={{margin: '0', textAlign: 'center', fontSize: '16px', color: t.muted}}>매주 금요일, 한 주 동안 쓴 글과 수업 내용을 주간 리포트로 보내드립니다.</p>
        </div>
      </section>

      <section className="wc-sec" style={{padding: '140px 24px', borderTop: '1px solid rgba(255,255,255,0.08)', background: t.card}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px', textAlign: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>대치 한 반, 분당 한 반.</p>
            <h2 style={{margin: '0', fontSize: 'clamp(36px, 5.2vw, 72px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-2px', color: t.title}}>한 명 한 명의 글을<br />끝까지 읽어 주는 겨울</h2>
            <p style={{margin: '8px auto 0', maxWidth: '720px', fontSize: '18px', lineHeight: '1.8', color: t.muted}}>반마다 10명 이하로만 엽니다. 매 수업 쓴 글을 선생님이 직접 첨삭하고, 고쳐 쓴 글까지 다시 확인합니다.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', borderTop: `2px solid ${t.title}`, borderBottom: '1px solid rgba(255,255,255,0.14)'}}>
            <div style={{padding: '32px 12px', display: 'flex', flexDirection: 'column', gap: '6px'}}><b style={{fontSize: '52px', lineHeight: '1', color: '#FFFFFF'}}>4<span style={{fontSize: '22px'}}>주</span></b><span style={{fontSize: '15px', color: t.muted}}>1. 5. ~ 1. 29.</span></div>
            <div style={{padding: '32px 12px', display: 'flex', flexDirection: 'column', gap: '6px'}}><b style={{fontSize: '52px', lineHeight: '1', color: '#FFFFFF'}}>64<span style={{fontSize: '22px'}}>시간</span></b><span style={{fontSize: '15px', color: t.muted}}>주 16시간 · 화~금 오전</span></div>
            <div style={{padding: '32px 12px', display: 'flex', flexDirection: 'column', gap: '6px'}}><b style={{fontSize: '52px', lineHeight: '1', color: '#FFFFFF'}}>10<span style={{fontSize: '22px'}}>명 이하</span></b><span style={{fontSize: '15px', color: t.muted}}>반별 정원</span></div>
            <div style={{padding: '32px 12px', display: 'flex', flexDirection: 'column', gap: '6px'}}><b style={{fontSize: '52px', lineHeight: '1', color: '#F4C04E'}}>20<span style={{fontSize: '22px'}}>자리</span></b><span style={{fontSize: '15px', color: t.muted}}>두 지점 합계</span></div>
          </div>
        </div>
      </section>

      <section className="wc-sec" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center'}}>
          <div style={{flex: '1 1 340px', minWidth: '0', display: 'flex', justifyContent: 'center'}}>
            <div style={{position: 'relative', width: '380px', maxWidth: '100%', aspectRatio: '4 / 5'}}>
              <div style={{position: 'absolute', left: '-8%', top: '6%', width: '116%', aspectRatio: '1 / 1', borderRadius: '50%', border: '2px dotted rgba(203,230,255,0.35)', boxSizing: 'border-box'}}></div>
              <img src="/assets/director-kim-yunhwan.jpg" alt="김윤환 원장" style={{position: 'relative', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 18%', borderRadius: '24px', display: 'block'}} />
              <span style={{position: 'absolute', right: '-10px', top: '8%', width: '18px', height: '18px', borderRadius: '50%', background: t.accent}}></span>
              <span style={{position: 'absolute', left: '16px', bottom: '16px', background: '#FFFFFF', color: '#14204A', borderRadius: '10px', padding: '8px 14px', fontSize: '15px', fontWeight: '900'}}>김윤환 원장</span>
            </div>
          </div>
          <div style={{flex: '999 1 480px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '22px'}}>
            <p style={{margin: '0', fontSize: 'clamp(20px, 2.2vw, 30px)', fontWeight: '300', lineHeight: '1.4'}}>매주 금요일, 원장 특강</p>
            <h2 style={{margin: '0', fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: '900', lineHeight: '1.3', letterSpacing: '-1.2px', color: t.title}}>원장이 직접<br />읽고 쓰는 법을 가르칩니다</h2>
            <p style={{margin: '0', fontSize: '19px', lineHeight: '1.8'}}>“잘 쓴 글은 잘 읽은 데서 나옵니다. 지문의 논지를 정확히 잡는 순간, 쓸 말이 생깁니다.”</p>
            <span style={{fontSize: '14px', color: t.muted}}>[원장 인용 — 실제 문장으로 교체]</span>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '22px', borderTop: '1px solid rgba(255,255,255,0.16)'}}>
              <b style={{fontSize: '17px'}}>연세대학교 행정학과 졸업 <span style={{fontSize: '14px', fontWeight: '400', color: t.muted}}>(논술특기자 입학)</span></b>
              <ul style={{margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px', lineHeight: '1.5'}}><li style={{display: 'flex', gap: '12px', alignItems: 'baseline'}}><span style={{flex: 'none', fontSize: '12px', fontWeight: '900', borderRadius: '5px', padding: '2px 7px', background: t.accent, color: '#FFFFFF'}}>현</span><span>문해와 사유 대치·분당학원 원장</span></li><li style={{display: 'flex', gap: '12px', alignItems: 'baseline'}}><span style={{flex: 'none', fontSize: '12px', fontWeight: '900', borderRadius: '5px', padding: '2px 7px', background: t.accent, color: '#FFFFFF'}}>현</span><span>시대인재 단과·재종 인문논술 강사</span></li><li style={{display: 'flex', gap: '12px', alignItems: 'baseline'}}><span style={{flex: 'none', fontSize: '12px', fontWeight: '900', borderRadius: '5px', padding: '2px 7px', background: t.accent, color: '#FFFFFF'}}>현</span><span>카이로스논구술 인문논술 대표강사</span></li><li style={{display: 'flex', gap: '12px', alignItems: 'baseline'}}><span style={{flex: 'none', fontSize: '12px', fontWeight: '900', borderRadius: '5px', padding: '2px 7px', background: t.accent, color: '#FFFFFF'}}>현</span><span>논술런(인강), 김윤환입시컨설팅 대표</span></li><li style={{display: 'flex', gap: '12px', alignItems: 'baseline'}}><span style={{flex: 'none', fontSize: '12px', fontWeight: '900', borderRadius: '5px', padding: '2px 7px', background: 'rgba(255,255,255,0.14)', color: t.muted}}>전</span><span>논단기·스카이에듀 논구술 강사</span></li><li style={{display: 'flex', gap: '12px', alignItems: 'baseline'}}><span style={{flex: 'none', fontSize: '12px', fontWeight: '900', borderRadius: '5px', padding: '2px 7px', background: 'rgba(255,255,255,0.14)', color: t.muted}}>전</span><span>아토즈논구술아카데미 원장</span></li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wc-sec" id="info" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>2027 겨울방학 윈터캠프</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>수강 안내</h2>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch'}}>
            <dl style={{flex: '999 1 560px', minWidth: '0', margin: '0', display: 'grid', gridTemplateColumns: '130px 1fr', fontSize: '17px', lineHeight: '1.6', borderTop: `2px solid ${t.title}`}}>
              <dt style={{fontWeight: '700', color: t.title, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>운영 기간</dt><dd style={{margin: '0', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>2027. 1. 5.(화) ~ 1. 29.(금), 4주</dd>
              <dt style={{fontWeight: '700', color: t.title, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>수업 시간</dt><dd style={{margin: '0', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>화~금 09:00~13:00 (주 16시간, 총 64시간)</dd>
              <dt style={{fontWeight: '700', color: t.title, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>대상 · 정원</dt><dd style={{margin: '0', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>초5·6 · 대치본원, 분당 수내점 각 1개 반, 반당 10명 이하</dd>
              <dt style={{fontWeight: '700', color: t.title, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>수업 구성</dt><dd style={{margin: '0', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>어휘 심화, 비문학(사회·과학), 쓰기 심화, 문법(기초·심화), 고전·현대문학, 모의 UN, 원장 특강</dd>
              <dt style={{fontWeight: '700', color: t.title, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>원장 특강</dt><dd style={{margin: '0', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>매주 금요일 · 대치 12:00~13:00, 분당 10:00~11:00</dd>
              <dt style={{fontWeight: '700', color: t.title, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>교재비 · 식사</dt><dd style={{margin: '0', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>교재비는 수강료에 포함 · 식사는 제공하지 않습니다</dd>
            </dl>
            <div style={{flex: '1 1 320px', minWidth: '0', borderRadius: '20px', padding: '36px', background: t.card, border: `1px solid ${t.ring}`, display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <span style={{fontSize: '14px', fontWeight: '700', color: t.title, letterSpacing: '1px'}}>TUITION</span>
              <b style={{fontSize: '26px', lineHeight: '1.4'}}>수강료와 등록 혜택은<br />각 원으로 문의해 주세요</b>
              <p style={{margin: '0', fontSize: '15px', lineHeight: '1.75', color: t.muted}}>반 편성과 수강료, 등록 혜택을 전화와 카카오 채널로 안내해 드립니다.</p>
              <div style={{marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <a href="tel:025635972" style={{background: '#D93654', color: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><span style={{fontSize: '14px', fontWeight: '700'}}>대치본원</span><b style={{fontSize: '20px'}}>02-563-5972</b></a>
                <a href="tel:0317135972" style={{background: '#FFFFFF', color: '#14204A', padding: '14px 18px', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><span style={{fontSize: '14px', fontWeight: '700'}}>분당 수내점</span><b style={{fontSize: '20px'}}>031-713-5972</b></a>
                <a href="#kakao" style={{background: '#FEE500', color: '#191919', padding: '14px 18px', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><span style={{fontSize: '14px', fontWeight: '700'}}>카카오 채널</span><b style={{fontSize: '18px'}}>문해와 사유 ›</b></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wc-sec" id="faq" style={{padding: '120px 24px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>상담에서 가장 많이 듣는 질문</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>자주 묻는 질문</h2>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', borderTop: `2px solid ${t.title}`}}>
            <details open style={{borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '22px 0'}}><summary style={{fontSize: '18px', fontWeight: '700'}}><span style={{color: t.title}}>Q.</span> 반은 어떻게 나누나요?</summary><p style={{margin: '14px 0 0', fontSize: '16px', lineHeight: '1.75', color: t.muted}}>지점별 한 반, 초5·6 혼합입니다. 자세한 반 편성은 각 원으로 문의해 주세요.</p></details>
            <details style={{borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '22px 0'}}><summary style={{fontSize: '18px', fontWeight: '700'}}><span style={{color: t.title}}>Q.</span> 점심은 어떻게 하나요?</summary><p style={{margin: '14px 0 0', fontSize: '16px', lineHeight: '1.75', color: t.muted}}>수업은 09:00~13:00이고 점심시간 없이 13시에 하원합니다. 식사는 제공하지 않습니다.</p></details>
            <details style={{borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '22px 0'}}><summary style={{fontSize: '18px', fontWeight: '700'}}><span style={{color: t.title}}>Q.</span> 대치와 분당 시간표가 다른가요?</summary><p style={{margin: '14px 0 0', fontSize: '16px', lineHeight: '1.75', color: t.muted}}>과목과 시수는 같고 요일 배치만 다릅니다. 위 시간표에서 지점을 눌러 확인하세요.</p></details>
            <details style={{borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '22px 0'}}><summary style={{fontSize: '18px', fontWeight: '700'}}><span style={{color: t.title}}>Q.</span> 어떤 작품과 지문을 읽나요?</summary><p style={{margin: '14px 0 0', fontSize: '16px', lineHeight: '1.75', color: t.muted}}>비문학은 5·6학년 사회·과학 단원과 이어지는 주제로, 수능·모의평가·대학 논술 지문을 초등 눈높이로 풀어 쓴 글을 읽습니다. 문학 작품은 확정 후 안내합니다.</p></details>
            <details style={{borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '22px 0'}}><summary style={{fontSize: '18px', fontWeight: '700'}}><span style={{color: t.title}}>Q.</span> 결석하면 보강이 되나요?</summary><p style={{margin: '14px 0 0', fontSize: '16px', lineHeight: '1.75', color: t.muted}}>[보강 규정 확정 후 입력]</p></details>
            <details style={{borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '22px 0'}}><summary style={{fontSize: '18px', fontWeight: '700'}}><span style={{color: t.title}}>Q.</span> 캠프가 끝나면 정규반으로 이어지나요?</summary><p style={{margin: '14px 0 0', fontSize: '16px', lineHeight: '1.75', color: t.muted}}>수료생은 3월 정규반에 우선 배정됩니다.</p></details>
          </div>
        </div>
      </section>

      <section className="wc-sec" id="apply" style={{padding: '120px 24px 140px', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <p style={{margin: '0', fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '300', lineHeight: '1.4'}}>대치 한 반, 분당 한 반. 두 지점 합쳐 20자리입니다.</p>
            <h2 style={{margin: '0', fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: '900', lineHeight: '1.25', letterSpacing: '-1.5px', color: t.title}}>자리와 시간표, 지금 각 원으로 문의하세요</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '20px'}}>
            <a href="tel:025635972" style={{background: '#FFFFFF', color: '#14204A', borderRadius: '20px', padding: '40px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '8px solid #D93654'}}>
              <span style={{fontSize: '16px', fontWeight: '700', color: '#D93654'}}>대치본원</span>
              <b style={{fontSize: 'clamp(36px, 4.4vw, 52px)', lineHeight: '1.1', letterSpacing: '-0.5px'}}>02-563-5972</b>
              <span style={{fontSize: '15px', lineHeight: '1.6', color: '#4B5675'}}>서울 강남구 도곡로 515 한도빌딩 2층</span>
              <span style={{marginTop: '8px', alignSelf: 'flex-start', background: '#D93654', color: '#FFFFFF', fontSize: '16px', fontWeight: '900', padding: '12px 22px', borderRadius: '8px'}}>전화 걸기 ›</span>
            </a>
            <a href="tel:0317135972" style={{background: '#FFFFFF', color: '#14204A', borderRadius: '20px', padding: '40px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px', borderTop: `8px solid ${t.accent}`}}>
              <span style={{fontSize: '16px', fontWeight: '700', color: t.accent}}>분당 수내점</span>
              <b style={{fontSize: 'clamp(36px, 4.4vw, 52px)', lineHeight: '1.1', letterSpacing: '-0.5px'}}>031-713-5972</b>
              <span style={{fontSize: '15px', lineHeight: '1.6', color: '#4B5675'}}>성남시 분당구 내정로173번길 1, 5층</span>
              <span style={{marginTop: '8px', alignSelf: 'flex-start', background: t.accent, color: '#FFFFFF', fontSize: '16px', fontWeight: '900', padding: '12px 22px', borderRadius: '8px'}}>전화 걸기 ›</span>
            </a>
          </div>
          <a id="kakao" href="#kakao" style={{background: '#FEE500', color: '#191919', borderRadius: '20px', padding: '28px 40px', textDecoration: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px'}}>
            <span style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span aria-hidden="true" style={{width: '52px', height: '52px', borderRadius: '50%', background: '#191919', color: '#FEE500', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '900'}}>톡</span><span style={{display: 'flex', flexDirection: 'column', gap: '2px'}}><b style={{fontSize: '24px'}}>카카오 채널 「문해와 사유」</b><span style={{fontSize: '15px'}}>전화가 어려우시면 카카오톡으로 편하게 문의하세요</span></span></span>
            <span style={{background: '#191919', color: '#FEE500', fontSize: '17px', fontWeight: '900', padding: '14px 24px', borderRadius: '8px'}}>채널 문의하기 ›</span>
          </a>
          <p style={{margin: '0', textAlign: 'center', fontSize: '15px', lineHeight: '1.8', color: t.muted}}>상담 화~금 13:00~21:00 · 토·일 09:30~21:00 · 얼리버드 등록 혜택 12월 13일(일) 마감</p>
        </div>
      </section>

      <footer className="wc-sec" style={{borderTop: '1px solid rgba(255,255,255,0.12)', padding: '40px 24px 56px'}}>
        <div style={{maxWidth: '1120px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', fontSize: '13px', lineHeight: '1.7', color: t.muted}}>
          <span>문해와 사유 · munsayu.com<br />[학원 등록번호] · [교습비 게시 안내]<br />※ 세부 일정과 커리큘럼은 바뀔 수 있습니다.</span>
          <span>© 2026 문해와 사유</span>
        </div>
      </footer>
    </div>
  );
}
