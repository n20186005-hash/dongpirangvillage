export const siteConfig = {
  name: 'Dongpirang Mural Village',
  baseUrl: 'https://dongpirangvillage.com',
  slug: 'dongpirang-mural-village',
  locales: ['zh', 'en', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};
