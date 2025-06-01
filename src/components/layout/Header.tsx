import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Icon from '../common/Icon.tsx';
import NavDropdown, { ANIMATION_SETTINGS } from '../common/NavDropdown.tsx';

import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';
import { links } from '../../utils/links.ts';
import { useLanguage } from '../../lib/LanguageContext.tsx';

const Header = () => {
  const { t } = useTranslation('header');
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null) as React.RefObject<HTMLButtonElement>;
  const desktopMenuButtonRef = useRef<HTMLButtonElement>(
    null
  ) as React.RefObject<HTMLButtonElement>;

  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const handleClickMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenMenu((prev) => !prev);
  };

  const handleClickBag = () => {
    console.log('Click open bag');
  };

  const handleChangeLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ge' : 'en';
    changeLanguage(newLang);
  };

  const languageText = `${t('language.en')} ${t('language.separator')} ${t('language.ge')}`;

  return (
    <div
      className={
        'flex items-center justify-between px-[30px] py-[20px] table:px-10 table:py-[30px] font-montserrat'
      }
    >
      {isMobile ? (
        <>
          <Link to={'/'} className={''}>
            <Icon id={'logo-1'} width={182} height={13} />
          </Link>
          <div className={'flex gap-5 justify-center items-center relative z-40'}>
            <button onClick={handleClickBag}>
              <Icon id={'shoppingCart'} width={13} height={13} />
            </button>
            <button
              ref={mobileMenuButtonRef}
              onClick={handleClickMenu}
              className="relative w-8 h-6 flex items-center justify-center"
            >
              <motion.span
                initial={false}
                animate={{ rotate: isOpenMenu ? 45 : 0, y: isOpenMenu ? 0 : -3 }}
                transition={{
                  duration: ANIMATION_SETTINGS.duration,
                  ease: ANIMATION_SETTINGS.ease,
                }}
                className="absolute w-8 h-[0.5px] bg-primary-cl"
              />
              <motion.span
                initial={false}
                animate={{ rotate: isOpenMenu ? -45 : 0, y: isOpenMenu ? 0 : 3 }}
                transition={{
                  duration: ANIMATION_SETTINGS.duration,
                  ease: ANIMATION_SETTINGS.ease,
                }}
                className="absolute w-8 h-[0.5px] bg-primary-cl"
              />
            </button>
          </div>
          <NavDropdown
            isOpen={isOpenMenu}
            onClose={() => setIsOpenMenu(false)}
            links={links}
            menuButtonRef={mobileMenuButtonRef}
            onLanguageChange={handleChangeLanguage}
            showLanguageButton={true}
            languageButtonText={languageText}
          />
        </>
      ) : (
        <>
          <button
            ref={desktopMenuButtonRef}
            onClick={handleClickMenu}
            className={
              'flex items-center gap-10 font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase'
            }
          >
            <div className={'flex flex-col gap-2.5'}>
              <span className={'flex w-[30px] h-[0.5px] bg-primary-cl'}></span>
              <span className={'flex w-[30px] h-[0.5px] bg-primary-cl'}></span>
            </div>
            <p>{t('menu')}</p>
          </button>
          <Icon id={'logo-1'} width={294} height={21} />
          <div className={'flex items-center gap-10'}>
            <button onClick={handleClickBag}>
              <Icon id={'shoppingCart'} width={14} height={14} />
            </button>
            <button
              onClick={handleChangeLanguage}
              className={'font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase'}
            >
              {languageText}
            </button>
          </div>
          <NavDropdown
            isOpen={isOpenMenu}
            onClose={() => setIsOpenMenu(false)}
            links={links}
            menuButtonRef={desktopMenuButtonRef}
            onLanguageChange={handleChangeLanguage}
            showLanguageButton={true}
            languageButtonText={languageText}
          />
        </>
      )}
    </div>
  );
};

export default Header;
