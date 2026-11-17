import './winter.css';

// 윈터캠프 랜딩 공용 레이아웃: 시안이 쓰는 웹폰트(Black Han Sans, Noto Sans KR)를 이 경로에서만 불러옵니다.
export default function WinterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" />
      {children}
    </>
  );
}
