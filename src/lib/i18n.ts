import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
  en: {
    translation: {
      header: {
        home: "Home",
        aboutUs: "About us",
        services: "Services",
        delicateCleaning: "delicate cleaning",
        shoesRestoration: "shoes restoration",
        bagRestoration: "bag restoration",
        casaliSoleProtectors: "Casali Sole Protectors",
        jacketRestoration: "Jacket Restoration",
        products: "Products",
        contacts: "Contacts"
      },
      footer: {
        facebook: "Facebook",
        instagram: "Instagram",
        tiktok: "Tiktok",
        copyright: "Hamptons & Soles © 2024 All rights reserved."
      }
    }
  },
  ge: {
    translation: {
      header: {
        home: "მთავარი",
        aboutUs: "ჩვენს შესახებ",
        services: "სერვისები",
        delicateCleaning: "დელიკატური წმენდა",
        shoesRestoration: "ფეხსაცმლის რესტავრაცია",
        bagRestoration: "ჩანთის რესტავრაცია",
        casaliSoleProtectors: "კასალის ძირის დამცავები",
        jacketRestoration: "ქურთუკის რესტავრაცია",
        products: "პროდუქტები",
        contacts: "კონტაქტები"
      },
      footer: {
        facebook: "Facebook",
        instagram: "Instagram",
        tiktok: "Tiktok",
        copyright: "Hamptons & Soles © 2024 ყველა უფლება დაცულია."
      }
    }
  }
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n; 