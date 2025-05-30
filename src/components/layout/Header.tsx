import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';

import Icon from '../common/Icon.tsx';
import { motion } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { links } from '../../utils/links.ts';

const ANIMATION_SETTINGS = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSubMenuId, setIsOpenSubMenuId] = useState<string | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleClickBag = () => {
    console.log('Click open bag');
  };

  const handleClickMenu = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isOpenMenu && isOpenSubMenuId !== null) {
      setIsOpenSubMenuId(null);
    }

    setIsOpenMenu((prev) => !prev);
  };

  const handleClickSubMenu = (menuId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenSubMenuId((prev) => (prev === menuId ? null : menuId));
  };

  const handleChangeLanguage = () => {
    console.log('click handleChangeLanguage');
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpenMenu &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        setIsOpenMenu(false);
        setIsOpenSubMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenMenu]);

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
              ref={menuButtonRef}
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

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isOpenMenu ? 1 : 0,
              height: isOpenMenu ? 'auto' : 0,
            }}
            transition={{
              duration: ANIMATION_SETTINGS.duration,
              ease: ANIMATION_SETTINGS.ease,
              opacity: {
                duration: ANIMATION_SETTINGS.duration,
                ease: ANIMATION_SETTINGS.ease,
                delay: isOpenMenu ? 0 : 0.2,
              },
              height: {
                duration: ANIMATION_SETTINGS.duration,
                ease: ANIMATION_SETTINGS.ease,
              },
            }}
            className="absolute top-[72px] left-0 z-30 w-full bg-primary-bg overflow-hidden"
          >
            <motion.ul
              ref={menuRef}
              className="w-full"
              initial={{ opacity: 0, y: -3 }}
              animate={{
                opacity: isOpenMenu ? 1 : 0,
                y: isOpenMenu ? 0 : -3,
              }}
              transition={{
                duration: ANIMATION_SETTINGS.duration,
                ease: ANIMATION_SETTINGS.ease,
                delay: isOpenMenu ? 0.2 : 0,
              }}
            >
              {links.map((el, index) => (
                <motion.li
                  key={el.link}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{
                    opacity: isOpenMenu ? 1 : 0,
                    x: isOpenMenu ? 0 : -5,
                  }}
                  transition={{
                    duration: ANIMATION_SETTINGS.duration,
                    ease: ANIMATION_SETTINGS.ease,
                    delay: isOpenMenu ? 0.3 + index * 0.08 : 0,
                  }}
                  className="flex flex-col font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase"
                >
                  {el.subLinks ? (
                    <button
                      onClick={(e) => handleClickSubMenu(el.link, e)}
                      className="flex items-center gap-2 px-8 py-4 font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase"
                    >
                      <p>{el.label}</p>
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
                    <Link to={el.link} onClick={handleClickMenu} className={'px-8 py-4'}>
                      {el.label}
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
                        opacity: {
                          duration: ANIMATION_SETTINGS.duration,
                          ease: ANIMATION_SETTINGS.ease,
                        },
                        height: {
                          duration: ANIMATION_SETTINGS.duration,
                          ease: ANIMATION_SETTINGS.ease,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <ul className="pl-8">
                        {el.subLinks.map((subEl, subIndex) => (
                          <motion.li
                            key={subEl.link}
                            initial={{ opacity: 0, x: -3 }}
                            animate={{
                              opacity: isOpenSubMenuId === el.link ? 1 : 0,
                              x: isOpenSubMenuId === el.link ? 0 : -3,
                            }}
                            transition={{
                              duration: ANIMATION_SETTINGS.duration,
                              ease: ANIMATION_SETTINGS.ease,
                              delay: isOpenSubMenuId === el.link ? 0.4 + subIndex * 0.08 : 0,
                            }}
                            className="flex text-[10px] list-decimal"
                          >
                            <Link to={subEl.link} onClick={handleClickMenu} className={'p-2.5'}>
                              {subEl.label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -5 }}
                animate={{
                  opacity: isOpenMenu ? 1 : 0,
                  x: isOpenMenu ? 0 : -5,
                }}
                transition={{
                  duration: ANIMATION_SETTINGS.duration,
                  ease: ANIMATION_SETTINGS.ease,
                  delay: isOpenMenu ? 0.3 + (links.length + 1) * 0.08 : 0,
                }}
                className="flex flex-col font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase"
              >
                <button
                  onClick={handleChangeLanguage}
                  className="flex items-center gap-2 px-8 py-4 font-light text-[12px] leading-[150%] tracking-[0.1em] uppercase"
                >
                  en / ge
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        </>
      ) : (
        <>
          <button onClick={handleClickMenu} className={'flex items-center gap-10'}>
            <div className={'flex flex-col gap-2.5'}>
              <span className={'flex w-[30px] h-[0.5px] bg-primary-cl'}></span>
              <span className={'flex w-[30px] h-[0.5px] bg-primary-cl'}></span>
            </div>
            <p>Menu</p>
          </button>
          <Icon id={'logo-1'} width={294} height={21} />
          <div className={'flex items-center gap-10'}>
            <button onClick={handleClickBag}>
              <Icon id={'shoppingCart'} width={14} height={14} />
            </button>
            <button onClick={handleChangeLanguage} className={'uppercase'}>
              en | ge
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
