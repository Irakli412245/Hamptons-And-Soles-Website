import React, {useState, useRef, useEffect} from 'react';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {motion} from 'framer-motion';

import Icon from "../UI/Icon.tsx";
import Button from "../UI/Button.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

// Navigation data
const NAVIGATION_DATA = {
    mobile: [
        {link: '/', title: 'Home'},
        {link: '/about', title: 'About us'},
        {
            link: '/',
            title: 'Services',
            links: [
                {link: '/delicate-cleaning', title: 'delicate cleaning'},
                {link: '/shoes-restoration', title: 'shoes restoration'},
                {link: '/bag-restoration', title: 'bag restoration'},
                {link: '/casali-sole-protectors', title: 'Casali Sole Protectors'},
                {link: '/jacket-restoration', title: 'Jacket Restoration'},
            ]
        },
        {link: '/products', title: 'Products'},
        {link: '/contacts', title: 'Contacts'},
        {link: '/', title: 'en|ge'}
    ],
    
    left: [
        {link: '/', title: 'Home'},
        {link: '/about', title: 'About us'},
        {
            link: '/services',
            title: 'Services',
            sub: [
                {link: '/delicate-cleaning', title: 'delicate cleaning'},
                {link: '/shoes-restoration', title: 'shoes restoration'},
                {link: '/bag-restoration', title: 'bag restoration'},
                {link: '/casali-sole-protectors', title: 'Casali Sole Protectors'},
                {link: '/jacket-restoration', title: 'Jacket Restoration'},
            ]
        },
    ],
    
    right: [
        {link: '/products', title: 'Products'},
        {link: '/contacts', title: 'Contacts'},
    ]
};

// Animation settings
const ANIMATION_SETTINGS = {
    duration: 0.3,
    ease: "easeInOut"
};

// Mobile menu component
interface IMobileMenu {
    onChangeLanguage: () => void;
}

const MobileMenu: React.FC<IMobileMenu> = ({onChangeLanguage}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
        if (isOpenSubMenu) setIsOpenSubMenu(false);
    };

    const toggleSubMenu = () => {
        setIsOpenSubMenu(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // Перевіряємо, що меню відкрите і клік був за межами меню
            if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                if (isOpenSubMenu) setIsOpenSubMenu(false);
            }
        };

        // Додаємо обробник подій тільки якщо меню відкрите
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Прибираємо обробник при розмонтуванні або зміні стану
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, isOpenSubMenu]);

    return (
        <div className={'flex flex-col w-full'}>
            <div className={'flex items-center justify-between py-6 px-4 desktop:px-10'}>
                <Icon id={'logo-text'} width={182} height={13}/>
                <Button
                    type="button"
                    onClick={toggleMenu}
                    className="relative w-8 h-6 flex items-center justify-center"
                >
                    <motion.span
                        initial={false}
                        animate={{rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -3}}
                        transition={{duration: ANIMATION_SETTINGS.duration, ease: ANIMATION_SETTINGS.ease}}
                        className="absolute w-8 h-[0.5px] bg-primary-cl"
                    />
                    <motion.span
                        initial={false}
                        animate={{rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 3}}
                        transition={{duration: ANIMATION_SETTINGS.duration, ease: ANIMATION_SETTINGS.ease}}
                        className="absolute w-8 h-[0.5px] bg-primary-cl"
                    />
                </Button>
            </div>
            
            <motion.ul
                ref={menuRef}
                initial={{height: 0, opacity: 0}}
                animate={{height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0}}
                transition={{duration: ANIMATION_SETTINGS.duration, ease: ANIMATION_SETTINGS.ease}}
                className="absolute top-[72px] left-0 z-40 w-full bg-primary-bg overflow-hidden pb-6 px-4"
            >
                {NAVIGATION_DATA.mobile.map(el => (
                    <li key={el.title}>
                        {el.links ? (
                            <Button type={'button'} className={''} onClick={toggleSubMenu}>
                                <p className={'text-[12px] uppercase'}>{el.title}</p>
                                {isOpenSubMenu ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                            </Button>
                        ) : (
                            <Button 
                                type={'link'} 
                                className={''} 
                                link={el.link} 
                                onClick={el.title.toLowerCase() === 'en|ge' ? onChangeLanguage : toggleMenu}
                            >
                                <p className={'uppercase text-[12px]'}>
                                    {el.title}
                                </p>
                            </Button>
                        )}
                        
                        {el.links && (
                            <motion.ul
                                initial={{height: 0, opacity: 0}}
                                animate={{height: isOpenSubMenu ? "auto" : 0, opacity: isOpenSubMenu ? 1 : 0}}
                                transition={{duration: ANIMATION_SETTINGS.duration, ease: ANIMATION_SETTINGS.ease}}
                                className="overflow-hidden"
                            >
                                {el.links.map(subEl => (
                                    <li className={'pl-4'} key={subEl.title}>
                                        <Button
                                            onClick={toggleMenu}
                                            type={'link'}
                                            className={''}
                                            link={subEl.link}
                                        >
                                            <p className={'w-1 h-1 bg-primary-cl rounded-full'}></p>
                                            <p className={'uppercase text-[12px]'}>
                                                {subEl.title}
                                            </p>
                                        </Button>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </li>
                ))}
            </motion.ul>
        </div>
    );
};

// Desktop submenu component
interface IDesktopSubmenu {
    items: {link: string, title: string}[];
    isOpen: boolean;
    onClose: () => void;
};

const DesktopSubmenu: React.FC<IDesktopSubmenu> = ({items, isOpen, onClose}) => (
    <motion.ul
        initial={{height: 0, opacity: 0}}
        animate={{height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0}}
        transition={{duration: ANIMATION_SETTINGS.duration, ease: ANIMATION_SETTINGS.ease}}
        className="absolute top-12 z-30 overflow-hidden bg-primary-bg"
    >
        {items?.map(subEl => (
            <li key={subEl.title} className={'min-w-[280px]'}>
                <Button
                    type={'link'}
                    link={subEl.link}
                    onClick={onClose}
                    className={'uppercase text-[14px]'}
                >
                    {subEl.title}
                </Button>
            </li>
        ))}
    </motion.ul>
);

// Main Header component
const Header = () => {
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
    const {width} = useWindowDimensions();

    const handleChangeLanguage = () => {
        console.log('change language');
    };

    const toggleSubMenu = () => {
        setIsOpenSubMenu(prevState => !prevState);
    };

    // Render mobile menu for smaller screens
    if (width < 1024) {
        return <MobileMenu onChangeLanguage={handleChangeLanguage}/>;
    }

    // Render desktop menu
    return (
        <div className={'flex items-center justify-between py-7 px-4 desktop:px-10'}>
            <ul className={'flex gap-2 desktop:gap-[42px]'}>
                {NAVIGATION_DATA.left.map(el => (
                    <li key={el.title} className={'relative'}>
                        {el.sub ? (
                            <Button
                                type={'button'}
                                onClick={toggleSubMenu}
                                className={'uppercase text-[14px]'}
                            >
                                {el.title}
                            </Button>
                        ) : (
                            <Button
                                type={'link'}
                                link={el.link}
                                className={'uppercase text-[14px]'}
                            >
                                {el.title}
                            </Button>
                        )}
                        
                        {isOpenSubMenu && el.sub && (
                            <DesktopSubmenu 
                                items={el.sub} 
                                isOpen={isOpenSubMenu} 
                                onClose={toggleSubMenu} 
                            />
                        )}
                    </li>
                ))}
            </ul>
            
            <Icon id={'logo-text'} width={294} height={20}/>
            
            <div className={'flex items-center gap-2 desktop:gap-[42px]'}>
                <ul className={'flex gap-2 desktop:gap-[42px]'}>
                    {NAVIGATION_DATA.right.map(el => (
                        <li key={el.title}>
                            <Button type={'link'} link={el.link} className={'uppercase text-[14px]'}>
                                {el.title}
                            </Button>
                        </li>
                    ))}
                </ul>
                <Button type={'button'} className={'text-[14px]'} onClick={handleChangeLanguage}>EN|GE</Button>
            </div>
        </div>
    );
};

export default Header;