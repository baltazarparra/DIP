import en from '../content/en.js';
import pt from '../content/pt.js';

const content = { en, pt } as const;

export type Locale = keyof typeof content;

export function getContent(locale: string) {
  const lang = locale === 'pt' ? 'pt' : 'en';
  return content[lang];
}
