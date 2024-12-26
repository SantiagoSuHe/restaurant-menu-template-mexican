import { useParams } from 'react-router-dom';
import { translations } from '../i18n/translations';
import { menuTranslations } from '../i18n/menuTranslations';

export type Language = 'en' | 'es';

export function useLanguage() {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  
  return {
    lang,
    t: translations[lang],
    menu: menuTranslations[lang],
  };
}