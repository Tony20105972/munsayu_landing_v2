// 카카오톡 공식 아이콘(카카오 제공 리소스). 카카오 채널 문의 링크에 공통으로 씁니다.
export default function KakaoIcon({ size }: { size: number }) {
  return <img src="/assets/kakaotalk-icon.svg" alt="" aria-hidden="true" width={size} height={size} style={{display: 'block', flex: 'none', width: size, height: size}} />;
}
