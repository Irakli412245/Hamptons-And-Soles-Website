import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import headerEN from './translations/en/header.json';
import headerGE from './translations/ge/header.json';
import homeEN from './translations/en/home.json';
import homeGE from './translations/ge/home.json';

const resources = {
  en: {
    header: headerEN,
    home: homeEN,
  },
  ge: {
    header: headerGE,
    home: homeGE,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 