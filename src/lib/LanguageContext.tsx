import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import i18n from './i18n';

type Language = 'en' | 'ge';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const savedLanguage = localStorage.getItem('i18nextLng') as Language || 'en';
  const [language, setLanguage] = useState<Language>(savedLanguage.substring(0, 2) as Language);

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLang = i18n.language.substring(0, 2) as Language;
      setLanguage(currentLang);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext; 