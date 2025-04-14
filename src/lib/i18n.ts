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
      },
      about: {
        company: {
          title: "About company",
          origin: "The Origin of the Company Name Hamptons & Soles takes its name from Northampton, England, a town with a rich history of producing high-quality footwear. Notable brands such as John Lobb, Edward Green, Church's, and Loake all hail from this region.",
          nameMeaning: "So Northampton inspired the first part of our name, \"Hamptons.\" \"Soles\" refers to shoe soles, emphasizing our belief that the care and restoration of shoes should begin with their soles",
          soleProtection: "Since shoe care and restoration begin with protecting the soles, we are proud to be the first restoration salon in Georgia to introduce the culture of beautiful and aesthetic sole dressing. We have partnered with Casali, an Italian manufacturer of premium protective soles.",
          casaliSoles: "Casali produces high-quality soles specifically designed for branded shoes, characterized by their thin profile, exceptional aesthetics, and a wide range of colors that perfectly match the soles of luxury footwear."
        },
        us: {
          title: "About us",
          specialization: "We specialize in leather/suede professional restoration and delicate hand cleaning of luxury items. Our journey began in 2017 when we studied restoration techniques at Colourlock (lederzentrum) in Germany and later becoming their official representatives in Georgia.",
          additionalTraining: "Since then, we have completed five additional training programs with leading European restoration services and cosmetics manufacturers.",
          luxuryFocus: "As certified specialists, we focus on luxury brands. Our extensive expertise in luxury restoration allows us to adapt our restoration methods and products to address the unique requirements of each brand and model.",
          premiumProducts: "We use various premium-grade cleaning and restoration products, including French Saphir Medal D'or, which is highly recommended and used by some of the most prestigious luxury brands, including: Louis Vuitton, Burberry, John Lobb, Hermes, and Berlutti, etc."
        },
        advantages: {
          title: "Our advantages",
          noRisk: "At Hamptons & Soles, we guarantee that there is no risk of damage during the cleaning and restoration of your items. We take pride in ensuring that suede maintains its softness, color, and integrity throughout the process.",
          meticulous: "Our meticulous approach involves cleaning each item delicately by hand, tailored to the specific material. We never use machines, which is crucial for preserving the quality of delicate items.",
          satisfaction: "If for any reason you are not satisfied with our work, we will make the necessary adjustments without damaging your item, and we won't stop until you are completely happy with the result. Fortunately, such cases are rare.",
          timeNeeded: "Please note that our restoration process requires time—typically 10-14 days—because it is both delicate and detailed.",
          commitment: "We carefully mix colors, select the right techniques, and address each scratch. If something doesn't meet our standards, we'll redo it until we achieve perfection. Quality takes time, and we are committed to delivering exceptional results."
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
      },
      about: {
        company: {
          title: "კომპანიის შესახებ",
          origin: "კომპანიის სახელის წარმოშობა: Hamptons & Soles იღებს თავის სახელს ინგლისის ქალაქ ნორთჰემპტონიდან, რომელსაც აქვს მაღალი ხარისხის ფეხსაცმლის წარმოების მდიდარი ისტორია. ისეთი ცნობილი ბრენდები, როგორიცაა John Lobb, Edward Green, Church's და Loake, ყველა ამ რეგიონიდან არის.",
          nameMeaning: "ასე რომ, ნორთჰემპტონმა შთააგონა ჩვენი სახელის პირველი ნაწილი, \"Hamptons\". \"Soles\" კი ნიშნავს ფეხსაცმლის ძირებს, რაც ხაზს უსვამს ჩვენს რწმენას, რომ ფეხსაცმლის მოვლა და რესტავრაცია უნდა დაიწყოს მისი ძირებიდან.",
          soleProtection: "რადგან ფეხსაცმლის მოვლა და რესტავრაცია იწყება ძირების დაცვით, ჩვენ ვამაყობთ, რომ ვართ პირველი სარესტავრაციო სალონი საქართველოში, რომელმაც დანერგა ლამაზი და ესთეტიკური ძირების მორთვის კულტურა. ჩვენ თანამშრომლობას ვუწევთ Casali-ს, იტალიურ პრემიუმ დამცავი ძირების მწარმოებელს.",
          casaliSoles: "Casali აწარმოებს მაღალი ხარისხის ძირებს, რომლებიც სპეციალურად შექმნილია ბრენდული ფეხსაცმლისთვის, ხასიათდება თხელი პროფილით, გამორჩეული ესთეტიკით და ფერების ფართო სპექტრით, რომლებიც იდეალურად შეესაბამება ლუქსური ფეხსაცმლის ძირებს."
        },
        us: {
          title: "ჩვენს შესახებ",
          specialization: "ჩვენ ვსპეციალიზდებით ტყავის/ზამშის პროფესიონალურ რესტავრაციასა და ძვირფასი ნივთების დელიკატურ ხელით წმენდაში. ჩვენი მოგზაურობა დაიწყო 2017 წელს, როდესაც შევისწავლეთ რესტავრაციის ტექნიკა Colourlock-ში (lederzentrum) გერმანიაში და შემდეგ გავხდით მათი ოფიციალური წარმომადგენლები საქართველოში.",
          additionalTraining: "მას შემდეგ ჩვენ დავასრულეთ ხუთი დამატებითი სასწავლო პროგრამა წამყვან ევროპულ სარესტავრაციო სერვისებთან და კოსმეტიკის მწარმოებლებთან.",
          luxuryFocus: "როგორც სერტიფიცირებული სპეციალისტები, ჩვენ ვფოკუსირებთ ლუქს ბრენდებზე. ჩვენი ფართო გამოცდილება ძვირფასი ნივთების რესტავრაციაში გვაძლევს საშუალებას მოვარგოთ ჩვენი რესტავრაციის მეთოდები და პროდუქტები თითოეული ბრენდისა და მოდელის უნიკალურ მოთხოვნებს.",
          premiumProducts: "ჩვენ ვიყენებთ სხვადასხვა პრემიუმ კლასის წმენდისა და რესტავრაციის პროდუქტებს, მათ შორის ფრანგულ Saphir Medal D'or-ს, რომელიც მაღალი რეკომენდაციით სარგებლობს და გამოიყენება ზოგიერთი ყველაზე პრესტიჟული ლუქს ბრენდის მიერ, მათ შორის: Louis Vuitton, Burberry, John Lobb, Hermes და Berlutti და ა.შ."
        },
        advantages: {
          title: "ჩვენი უპირატესობები",
          noRisk: "Hamptons & Soles-ში ჩვენ გარანტიას ვიძლევით, რომ თქვენი ნივთების წმენდისა და რესტავრაციის დროს დაზიანების რისკი არ არსებობს. ჩვენ ვამაყობთ, რომ ვუზრუნველყოფთ ზამშის სირბილის, ფერისა და მთლიანობის შენარჩუნებას პროცესის განმავლობაში.",
          meticulous: "ჩვენი ზედმიწევნითი მიდგომა გულისხმობს თითოეული ნივთის დელიკატურად ხელით წმენდას, რომელიც მორგებულია კონკრეტულ მასალაზე. ჩვენ არასდროს ვიყენებთ მანქანებს, რაც გადამწყვეტია დელიკატური ნივთების ხარისხის შესანარჩუნებლად.",
          satisfaction: "თუ რაიმე მიზეზით ჩვენი მუშაობით უკმაყოფილო ხართ, ჩვენ გავაკეთებთ საჭირო კორექტირებებს თქვენი ნივთის დაზიანების გარეშე და არ შევწყვეტთ, სანამ სრულად არ გახდებით კმაყოფილი შედეგით. საბედნიეროდ, ასეთი შემთხვევები იშვიათია.",
          timeNeeded: "გთხოვთ გაითვალისწინოთ, რომ ჩვენი რესტავრაციის პროცესს სჭირდება დრო - როგორც წესი 10-14 დღე - რადგან ის არის როგორც დელიკატური, ასევე დეტალური.",
          commitment: "ჩვენ ყურადღებით ვურევთ ფერებს, ვირჩევთ სწორ ტექნიკას და ვაგვარებთ თითოეულ ნაკაწრს. თუ რამე არ შეესაბამება ჩვენს სტანდარტებს, ჩვენ გავაკეთებთ ხელახლა, სანამ სრულყოფილებას არ მივაღწევთ. ხარისხი დროს მოითხოვს და ჩვენ ვალდებულები ვართ უზრუნველვყოთ გამორჩეული შედეგები."
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