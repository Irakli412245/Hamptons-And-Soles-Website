import { motion } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';

// eslint-disable-next-line react-refresh/only-export-components
export const ANIMATION_SETTINGS = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

export interface ILink {
  label: string;
  link: string;
  subLinks?: ILink[];
}

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  links: ILink[];
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  onLanguageChange?: () => void;
  showLanguageButton?: boolean;
  languageButtonText?: string;
  className?: string;
}

const NavDropdown: React.FC<IProps> = ({
  isOpen,
  onClose,
  links,
  menuButtonRef,
  onLanguageChange,
  showLanguageButton = false,
  languageButtonText = 'en / ge',
  className = '',
}) => {
  const { t } = useTranslation('header');
  const [isOpenSubMenuId, setIsOpenSubMenuId] = useState<string | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleClickSubMenu = (menuId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenSubMenuId((prev) => (prev === menuId ? null : menuId));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const isClickInsideMenu = menuRef.current?.contains(target);
      const isClickOnMenuButton = menuButtonRef.current?.contains(target);

      if (isOpen && !isClickInsideMenu && !isClickOnMenuButton) {
        onClose();
        setIsOpenSubMenuId(null);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, menuButtonRef]);

  useEffect(() => {
    if (!isOpen) {
      setIsOpenSubMenuId(null);
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? 'auto' : 0,
      }}
      transition={{
        duration: ANIMATION_SETTINGS.duration,
        ease: ANIMATION_SETTINGS.ease,
      }}
      className={`absolute top-[84px] table:top-[104px] table:w-1/2 left-0 z-30 w-full bg-primary-bg overflow-hidden ${className}`}
    >
      <motion.ul
        ref={menuRef}
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: ANIMATION_SETTINGS.duration,
          ease: ANIMATION_SETTINGS.ease,
          delay: isOpen ? ANIMATION_SETTINGS.duration * 0.2 : 0,
        }}
      >
        {links.map((el, index) => (
          <motion.li
            key={el.link}
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : -10,
            }}
            transition={{
              duration: ANIMATION_SETTINGS.duration,
              ease: ANIMATION_SETTINGS.ease,
              delay: isOpen ? ANIMATION_SETTINGS.duration * 0.3 + index * 0.05 : 0,
            }}
            className="flex flex-col font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase"
          >
            {el.subLinks ? (
              <button
                onClick={(e) => handleClickSubMenu(el.link, e)}
                className="flex items-center gap-2 px-8 table:px-10 py-4 font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase"
              >
                <p>{t(el.label)}</p>
                <motion.span
                  animate={{ rotate: isOpenSubMenuId === el.link ? 180 : 0 }}
                  transition={{
                    duration: ANIMATION_SETTINGS.duration,
                    ease: ANIMATION_SETTINGS.ease,
                  }}
                >
                  {isOpenSubMenuId === el.link ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </motion.span>
              </button>
            ) : (
              <Link to={el.link} onClick={onClose} className={'px-8 py-4 table:px-10'}>
                {t(el.label)}
              </Link>
            )}

            {el.subLinks && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isOpenSubMenuId === el.link ? 'auto' : 0,
                  opacity: isOpenSubMenuId === el.link ? 1 : 0,
                }}
                transition={{
                  duration: ANIMATION_SETTINGS.duration,
                  ease: ANIMATION_SETTINGS.ease,
                }}
                className="overflow-hidden"
              >
                <ul className="pl-8">
                  {el.subLinks.map((subEl, subIndex) => (
                    <motion.li
                      key={subEl.link}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{
                        opacity: isOpenSubMenuId === el.link ? 1 : 0,
                        x: isOpenSubMenuId === el.link ? 0 : -5,
                      }}
                      transition={{
                        duration: ANIMATION_SETTINGS.duration,
                        ease: ANIMATION_SETTINGS.ease,
                        delay:
                          isOpenSubMenuId === el.link
                            ? ANIMATION_SETTINGS.duration * 0.2 + subIndex * 0.05
                            : 0,
                      }}
                      className="flex text-[10px] list-decimal"
                    >
                      <Link to={subEl.link} onClick={onClose} className={'p-2.5'}>
                        {t(subEl.label)}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.li>
        ))}
        {showLanguageButton && (
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : -10,
            }}
            transition={{
              duration: ANIMATION_SETTINGS.duration,
              ease: ANIMATION_SETTINGS.ease,
              delay: isOpen ? ANIMATION_SETTINGS.duration * 0.3 + links.length * 0.05 : 0,
            }}
            className="flex flex-col font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase"
          >
            {isMobile && (
              <button
                onClick={onLanguageChange}
                className="flex items-center gap-2 px-8 py-4 font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase"
              >
                {languageButtonText}
              </button>
            )}
          </motion.li>
        )}
      </motion.ul>
    </motion.div>
  );
};

export default NavDropdown;
