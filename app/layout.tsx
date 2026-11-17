import './globals.css';
import type { Metadata, Viewport } from 'next';
import { SITE_URL, social } from './og';

const TITLE = '문해와 사유 | 초등 문해력·독서·사고력 교육 설명회';
const DESCRIPTION = '초등학교 때의 문해력이 중·고등학교 공부의 기반이 됩니다. 초등 5~6학년 학부모 대상 · 대치본원 / 분당 수내점';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  ...social(TITLE, DESCRIPTION),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;600;700;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
