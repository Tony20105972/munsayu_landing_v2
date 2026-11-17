// 공유 미리보기(OG) 공통 값. 각 페이지는 title·description만 따로 지정합니다.
export const SITE_URL = 'https://www.munsayu-landing.com';

const OG_IMAGE = { url: '/og-image.jpg', width: 1200, height: 630, alt: '문해와 사유 — 읽고, 생각하고, 표현하다' };

export function social(title: string, description: string) {
  return {
    openGraph: { type: 'website' as const, locale: 'ko_KR', siteName: '문해와 사유', title, description, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image' as const, title, description, images: [OG_IMAGE.url] },
  };
}
