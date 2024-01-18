import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import English from '@/lang/English';
import Korean from '@/lang/Korean';

const resources = {
  en: { translation: English },
  ko: { translation: Korean },
};

i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: 'en',
    fallbackLng: {
      en: ['en'],
      ko: ['ko'],
      default: ['en'],
    },
    defaultNS: 'translation',
    ns: 'translation',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;