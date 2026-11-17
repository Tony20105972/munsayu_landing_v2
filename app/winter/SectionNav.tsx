const ITEMS = [
  { href: '#outcome', label: '2027 윈터캠프' },
  { href: '#curriculum', label: '커리큘럼' },
  { href: '#schedule', label: '지점별 시간표' },
  { href: '#apply', label: '문의하기' },
];

// 히어로 아래 섹션 탭. 첫 칸 배경만 시안별 색(active)으로 칠합니다.
export default function SectionNav({ active }: { active: string }) {
  return (
    <nav aria-label="윈터캠프 섹션" style={{background: '#EEF3FF', overflowX: 'auto', borderBottom: '1px solid #DCE2F2'}}>
      <div className="wc-nav" style={{maxWidth: '1320px', minWidth: '560px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', borderLeft: '1px solid #DCE2F2'}}>
        {ITEMS.map((it, i) => i === 0
          ? <a key={it.href} href={it.href} style={{background: active, color: '#FFFFFF', minHeight: '84px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '900', textDecoration: 'none'}}>{it.label}</a>
          : <a key={it.href} href={it.href} style={{color: '#8C96B8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700', textDecoration: 'none', borderRight: '1px solid #DCE2F2'}}>{it.label}</a>)}
      </div>
    </nav>
  );
}
