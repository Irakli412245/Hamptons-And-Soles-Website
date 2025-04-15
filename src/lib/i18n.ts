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
      },
      bag: {
        heroTitle: {
          firstLine: "Bag",
          secondLine: "Restoration"
        },
        heroSubtitle: {
          firstLine: "Luxury Bags, Lovingly Restored",
          secondLine: "to Their Original Elegance"
        },
        servicePrice: "*Service Price:",
        currency: "gel",
        serviceIncludes: "Service includes:",
        restoration: {
          title: "/ Bag Restoration Service",
          cleaning: {
            title: "Delicate Cleaning:",
            description: "We gently clean both the interior and exterior of your bag."
          },
          moisturization: {
            title: "Restoration and Moisturization:",
            description: "Our experts carefully repair any damage to the leather surface and apply moisturization to maintain the leather's softness and luster."
          },
          note: "Please note, interior restoration is not included in this service."
        },
        silicone: {
          title: "/ Silicone Restoration on Bag Handles",
          description: "Revitalize the handles of your luxury bags with our specialized Silicone Restoration Service. This service is tailored to restore the silicone on your bag handles, ensuring they look as good as new."
        },
        handles: {
          title: "/  Making New Bag Handles",
          priceFrom: "from 250",
          description: "We specialize in crafting high-quality, custom handles that perfectly match your bag's style and materials.",
          craftsmanship: {
            title: "Custom Craftsmanship:",
            description: "We will create new bag handles tailored to your specifications."
          },
          materials: {
            title: "Material Matching:",
            description: "We use premium materials that align with your bag's original design."
          }
        },
        care: {
          title: {
            firstLine: "Leather",
            secondLine: "Bag Care Instructions"
          },
          point1: {
            text: "A leather bags should be cleaned 3-4 times a year to maintain its condition and extend its lifespan. When cleaning a leather bag, it's important to ",
            bold: "use only special leather cleaners"
          },
          point2: {
            title: "Avoid Harsh Chemicals:",
            text: "Do not use wet wipes, household cleaners or alcohol-based products."
          },
          point3: {
            title: "Leather Conditioner:",
            text: "Apply a leather conditioner after cleaning to keep leather soft and prevent from drying out or cracking."
          },
          point4: {
            title: "Protect from Water:",
            text: "Apply a leather protector or water-repellent spray designed for leather to shield the bag from rain and moisture."
          },
          point5: "For deeper cleaning or stains that cannot be handled at home, take the bag to a professional leather cleaner who specializes in treating leather garments."
        }
      },
      casali: {
        heroTitle: "Casali Sole Protectors",
        heroSubtitle: {
          firstLine: "Luxury Soles for high fashion",
          secondLine: "and elegant shoes"
        },
        servicePrice: "*Service Price:",
        currency: "gel",
        mirror: {
          title: "/ Sole Protector Casali Mirror",
          description1: "Our Sole Binding Service includes the application of the Casali Mirror Sole Protector — a premium, high-gloss protective sole (excluding the heel) that is specifically designed to preserve the appearance and integrity of luxury shoes.",
          description2: "You can choose from 15 different colors of protective soles, carefully matched to the original colors of luxury designer shoe soles, ensuring your footwear retains its elegance while being fully protected."
        },
        silk: {
          title: "/ Sole Protector Casali Silk",
          description1: "Our Sole Binding Service includes the application of the Casali Silk Sole Protector—a premium, high-quality sole (excluding the heel) specifically designed to preserve both the appearance and structural integrity of luxury shoes.",
          description2: "You can choose from 12 different colors of protective soles, carefully matched to the original colors of luxury designer shoe soles, ensuring your footwear retains its elegance while being fully protected."
        },
        ballerina: {
          title: "/ Sole Protector Casali Ballerina",
          description: "Our Sole Binding Service includes the application of the Casali Silk Sole Protector—a premium, high-quality sole (excluding the heel) specifically designed to preserve both the appearance and structural integrity of luxury shoes."
        },
        heel: {
          title: "/ Heel Restoration Service",
          description: "Our Heel Restoration Service focuses on binding the sole on the heel just like the original design. This service ensures that your luxury shoes maintain their aesthetic appeal while receiving the necessary repairs to keep them in top condition."
        },
        benefits: {
          title: "Why Choose Casali Soles for Your Luxury Shoes?",
          colorMatch: {
            title: "Perfect Color Match",
            description: "One of the standout features of Casali soles is their wide variety of colors, designed to match the original sole color of luxury shoes. Unlike many generic sole protectors, Casali soles are made specifically to blend seamlessly with designer shoe brands. The color-matching capability ensures that the beauty of your luxury shoes is not compromised, but enhanced."
          },
          elegance: {
            title: "Elegance with Functionality",
            description: "Casali soles are not only protective but also aesthetically pleasing. Their sleek, mirror or silk-like finish enhances the shoe's appearance while providing superior durability. With these soles, you can keep your shoes looking pristine without sacrificing style."
          },
          customization: {
            title: "Customization and Precision",
            description: "At Hamptons & Soles, we take pride in tailoring each Casali sole to your specific shoe. Our craftsmen ensure that the color, fit, and style are a perfect match for your shoes, making the protective sole nearly invisible while adding extra wear protection."
          },
          highEnd: {
            title: "Perfect for High-End Shoes",
            description: "Casali soles are trusted by luxury shoe owners worldwide because they are designed to meet the high standards of top designer brands. Whether you own Louboutins, Jimmy Choos, Chanel, Hermes or Valentino shoes, Casali soles preserve the elegance and original craftsmanship of your footwear."
          }
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
      },
      bag: {
        heroTitle: {
          firstLine: "ჩანთის",
          secondLine: "რესტავრაცია"
        },
        heroSubtitle: {
          firstLine: "ძვირფასი ჩანთები, სიყვარულით აღდგენილი",
          secondLine: "მათ ორიგინალურ ელეგანტურობამდე"
        },
        servicePrice: "*სერვისის ფასი:",
        currency: "gel",
        serviceIncludes: "სერვისი მოიცავს:",
        restoration: {
          title: "/ ჩანთის რესტავრაცია",
          cleaning: {
            title: "ნაზი წმენდა:",
            description: "ჩვენ ფრთხილად ვასუფთავებთ თქვენი ჩანთის როგორც შიგნით, ასევე გარეთა ნაწილს."
          },
          moisturization: {
            title: "რესტავრაცია და დატენიანება:",
            description: "ჩვენი ექსპერტები ფრთხილად აღადგენენ ტყავის ზედაპირის დაზიანებებს და იყენებენ დამატენიანებელს ტყავის სირბილისა და ბზინვარების შესანარჩუნებლად."
          },
          note: "გთხოვთ გაითვალისწინოთ, შიდა რესტავრაცია არ შედის ამ სერვისში."
        },
        silicone: {
          title: "/ ჩანთის სახელურების სილიკონის რესტავრაცია",
          description: "აღადგინეთ თქვენი ძვირფასი ჩანთების სახელურები ჩვენი სპეციალიზებული სილიკონის რესტავრაციის სერვისით. ეს სერვისი შექმნილია თქვენი ჩანთის სახელურებზე სილიკონის აღსადგენად, რათა ისინი ახალივით გამოიყურებოდეს."
        },
        handles: {
          title: "/  ჩანთის ახალი სახელურების დამზადება",
          priceFrom: "250-დან",
          description: "ჩვენ ვსპეციალიზირდებით მაღალი ხარისხის, ინდივიდუალური სახელურების დამზადებაში, რომლებიც იდეალურად ერგება თქვენი ჩანთის სტილსა და მასალებს.",
          craftsmanship: {
            title: "ინდივიდუალური ხელოსნობა:",
            description: "ჩვენ შევქმნით ახალ ჩანთის სახელურებს თქვენი სპეციფიკაციების მიხედვით."
          },
          materials: {
            title: "მასალების შესაბამისობა:",
            description: "ჩვენ ვიყენებთ პრემიუმ მასალებს, რომლებიც შეესაბამება თქვენი ჩანთის ორიგინალურ დიზაინს."
          }
        },
        care: {
          title: {
            firstLine: "ტყავის",
            secondLine: "ჩანთის მოვლის ინსტრუქციები"
          },
          point1: {
            text: "ტყავის ჩანთა უნდა გაიწმინდოს წელიწადში 3-4-ჯერ, რათა შენარჩუნდეს მისი მდგომარეობა და გახანგრძლივდეს მისი სიცოცხლე. ტყავის ჩანთის გაწმენდისას მნიშვნელოვანია ",
            bold: "გამოიყენოთ მხოლოდ სპეციალური ტყავის საწმენდები"
          },
          point2: {
            title: "მოერიდეთ მკვეთრ ქიმიკატებს:",
            text: "არ გამოიყენოთ სველი ხელსახოცები, საყოფაცხოვრებო საწმენდები ან ალკოჰოლის შემცველი პროდუქტები."
          },
          point3: {
            title: "ტყავის კონდიციონერი:",
            text: "გაწმენდის შემდეგ გამოიყენეთ ტყავის კონდიციონერი ტყავის სირბილის შესანარჩუნებლად და გამოშრობის ან გაბზარვის თავიდან ასაცილებლად."
          },
          point4: {
            title: "დაიცავით წყლისგან:",
            text: "გამოიყენეთ ტყავის დამცავი ან წყალგამძლე სპრეი, რომელიც შექმნილია ტყავისთვის, რათა დაიცვათ ჩანთა წვიმისა და სინოტივისგან."
          },
          point5: "უფრო ღრმა გაწმენდის ან ლაქების შემთხვევაში, რომლებიც ვერ მოგვარდება სახლში, მიიტანეთ ჩანთა პროფესიონალ ტყავის მწმენდავთან, რომელიც სპეციალიზირებულია ტყავის ნაწარმის დამუშავებაში."
        }
      },
      casali: {
        heroTitle: "კასალის ძირის დამცავები",
        heroSubtitle: {
          firstLine: "ლუქსური ძირები მაღალი მოდის",
          secondLine: "და ელეგანტური ფეხსაცმლისთვის"
        },
        servicePrice: "*სერვისის ფასი:",
        currency: "gel",
        mirror: {
          title: "/ კასალის სარკისებრი ძირის დამცავი",
          description1: "ჩვენი ძირის დამაგრების სერვისი მოიცავს კასალის სარკისებრი ძირის დამცავის გამოყენებას — პრემიუმ კლასის, მაღალი ბზინვარების მქონე დამცავი ძირი (ქუსლის გარდა), რომელიც სპეციალურად შექმნილია ლუქსური ფეხსაცმლის გარეგნული იერის და მთლიანობის შესანარჩუნებლად.",
          description2: "თქვენ შეგიძლიათ აირჩიოთ დამცავი ძირების 15 სხვადასხვა ფერიდან, რომლებიც ზუსტად შეესაბამება ლუქსური დიზაინერული ფეხსაცმლის ორიგინალურ ფერებს, რაც უზრუნველყოფს, რომ თქვენი ფეხსაცმელი ინარჩუნებს ელეგანტურობას სრული დაცვის პირობებში."
        },
        silk: {
          title: "/ კასალის აბრეშუმისებრი ძირის დამცავი",
          description1: "ჩვენი ძირის დამაგრების სერვისი მოიცავს კასალის აბრეშუმისებრი ძირის დამცავის გამოყენებას — პრემიუმ კლასის, მაღალი ხარისხის ძირი (ქუსლის გარდა), რომელიც სპეციალურად შექმნილია ლუქსური ფეხსაცმლის როგორც გარეგნული იერის, ასევე სტრუქტურული მთლიანობის შესანარჩუნებლად.",
          description2: "თქვენ შეგიძლიათ აირჩიოთ დამცავი ძირების 12 სხვადასხვა ფერიდან, რომლებიც ზუსტად შეესაბამება ლუქსური დიზაინერული ფეხსაცმლის ორიგინალურ ფერებს, რაც უზრუნველყოფს, რომ თქვენი ფეხსაცმელი ინარჩუნებს ელეგანტურობას სრული დაცვის პირობებში."
        },
        ballerina: {
          title: "/ კასალის ბალერინას ძირის დამცავი",
          description: "ჩვენი ძირის დამაგრების სერვისი მოიცავს კასალის აბრეშუმისებრი ძირის დამცავის გამოყენებას — პრემიუმ კლასის, მაღალი ხარისხის ძირი (ქუსლის გარდა), რომელიც სპეციალურად შექმნილია ლუქსური ფეხსაცმლის როგორც გარეგნული იერის, ასევე სტრუქტურული მთლიანობის შესანარჩუნებლად."
        },
        heel: {
          title: "/ ქუსლის რესტავრაციის სერვისი",
          description: "ჩვენი ქუსლის რესტავრაციის სერვისი ფოკუსირებულია ქუსლზე ძირის დამაგრებაზე ზუსტად ორიგინალური დიზაინის მსგავსად. ეს სერვისი უზრუნველყოფს, რომ თქვენი ლუქსური ფეხსაცმელი ინარჩუნებს ესთეტიკურ მიმზიდველობას, ამავდროულად იღებს აუცილებელ შეკეთებას საუკეთესო მდგომარეობაში შესანარჩუნებლად."
        },
        benefits: {
          title: "რატომ უნდა აირჩიოთ კასალის ძირები თქვენი ლუქსური ფეხსაცმლისთვის?",
          colorMatch: {
            title: "იდეალური ფერის შესაბამისობა",
            description: "კასალის ძირების ერთ-ერთი გამორჩეული მახასიათებელია მათი ფერების ფართო ასორტიმენტი, რომელიც შექმნილია ლუქსური ფეხსაცმლის ორიგინალური ძირის ფერის შესაბამისად. განსხვავებით ბევრი ზოგადი ძირის დამცავისგან, კასალის ძირები სპეციალურად მზადდება დიზაინერული ფეხსაცმლის ბრენდებთან უნაკლოდ შესაბამისობისთვის. ფერების შესაბამისობის შესაძლებლობა უზრუნველყოფს, რომ თქვენი ლუქსური ფეხსაცმლის სილამაზე არა მხოლოდ არ დაირღვევა, არამედ გაუმჯობესდება კიდეც."
          },
          elegance: {
            title: "ელეგანტურობა ფუნქციურობასთან ერთად",
            description: "კასალის ძირები არა მხოლოდ დამცავი, არამედ ესთეტიკურად სასიამოვნოც არის. მათი დახვეწილი, სარკისებრი ან აბრეშუმისებრი ზედაპირი აუმჯობესებს ფეხსაცმლის გარეგნულ იერს და ამავდროულად უზრუნველყოფს უმაღლეს გამძლეობას. ამ ძირებით შეგიძლიათ ფეხსაცმელი უმწიკვლოდ შეინარჩუნოთ სტილის დაკარგვის გარეშე."
          },
          customization: {
            title: "ინდივიდუალიზაცია და სიზუსტე",
            description: "Hamptons & Soles-ში ჩვენ ვამაყობთ, რომ თითოეულ კასალის ძირს ვარგებთ თქვენს კონკრეტულ ფეხსაცმელს. ჩვენი ოსტატები უზრუნველყოფენ, რომ ფერი, ზომა და სტილი იდეალურად შეესაბამებოდეს თქვენს ფეხსაცმელს, რაც დამცავ ძირს თითქმის უხილავს ხდის და ამავდროულად მატებს დამატებით ცვეთისგან დაცვას."
          },
          highEnd: {
            title: "იდეალური მაღალი კლასის ფეხსაცმლისთვის",
            description: "კასალის ძირებს ენდობიან ლუქსური ფეხსაცმლის მფლობელები მთელ მსოფლიოში, რადგან ისინი შექმნილია წამყვანი დიზაინერული ბრენდების მაღალი სტანდარტების დასაკმაყოფილებლად. თუ გაქვთ Louboutins, Jimmy Choo, Chanel, Hermes ან Valentino-ს ფეხსაცმელი, კასალის ძირები ინარჩუნებს თქვენი ფეხსაცმლის ელეგანტურობას და ორიგინალურ ოსტატობას."
          }
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