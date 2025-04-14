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
      },
      home: {
        missionStatement: {
          title: "Our mission is to provide customers with professional, aesthetically-driven restoration and delicate cleaning of luxury shoes and handbags, paired with high-quality, comfortable service",
          services: "Our services:",
          delicateCleaning: "delicate cleaning",
          shoeRestoration: "shoe restoration",
          bagRestoration: "bag restoration",
          coatRestoration: "coat restoration",
          protectiveSoles: "protective soles",
          cobblerRepair: "Cobbler Repair"
        },
        trustStatement: {
          title: "Since 2017, we've had the honor of restoring and caring for over 7,000 of your beloved items from finest luxury brands. Thank you for your continued trust in our service.",
          andMore: "AND MORE"
        },
        reviewsSection: {
          title: "Reviews",
          description: "Seeing your tags brightens our day! Thank you for trusting us with your beloved luxury items"
        },
        contactSection: {
          title: "Get in touch with us:",
          addressTbilisi: "Brothers Kakabadze 5, Tbilisi 0110, Georgia",
          hoursTbilisi: "Monday - Friday 10:00 - 19:00",
          addressAxis: "Axis Towers shopping center, I.Chavchavadze Avenue 37m",
          hoursAxis: "Monday - Sunday 10:00 - 22:00"
        }
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
      },
      home: {
        missionStatement: {
          title: "ჩვენი მისიაა მომხმარებლებს შევთავაზოთ პროფესიონალური, ესთეტიკურად მიმართული რესტავრაცია და ძვირადღირებული ფეხსაცმლისა და ჩანთების დელიკატური წმენდა, ხარისხიან და კომფორტულ მომსახურებასთან ერთად",
          services: "ჩვენი სერვისები:",
          delicateCleaning: "დელიკატური წმენდა",
          shoeRestoration: "ფეხსაცმლის რესტავრაცია",
          bagRestoration: "ჩანთის რესტავრაცია",
          coatRestoration: "ქურთუკის რესტავრაცია",
          protectiveSoles: "დამცავი ძირები",
          cobblerRepair: "მეწაღის შეკეთება"
        },
        trustStatement: {
          title: "2017 წლიდან გვაქვს პატივი აღვადგინოთ და ვიზრუნოთ თქვენი 7000-ზე მეტი საყვარელი ნივთის მოვლაზე საუკეთესო ლუქს ბრენდებიდან. მადლობა გვენდობით ჩვენს სერვისს.",
          andMore: "და სხვა"
        },
        reviewsSection: {
          title: "შეფასებები",
          description: "თქვენი ტეგების დანახვა აკაშკაშებს ჩვენს დღეს! მადლობა რომ გვენდობით თქვენს საყვარელ ძვირფას ნივთებს"
        },
        contactSection: {
          title: "დაგვიკავშირდით:",
          addressTbilisi: "ძმები კაკაბაძეების ქ. 5, თბილისი 0110, საქართველო",
          hoursTbilisi: "ორშაბათი - პარასკევი 10:00 - 19:00",
          addressAxis: "აქსის თაუერსის სავაჭრო ცენტრი, ი.ჭავჭავაძის გამზირი 37მ",
          hoursAxis: "ორშაბათი - კვირა 10:00 - 22:00"
        }
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