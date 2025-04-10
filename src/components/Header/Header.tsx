import {useState} from 'react';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {motion} from 'framer-motion';

import Icon from "../UI/Icon.tsx";
import Button from "../UI/Button.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)

    const links = [
        {
            link: '/',
            title: 'Home'
        },
        {
            link: '/about',
            title: 'About us'
        },
        {
            link: '/',
            title: 'Services',
            links: [
                {
                    link: '/',
                    title: 'delicate cleaning'
                },
                {
                    link: '/shoes',
                    title: 'shoes restoration'
                },
                {
                    link: '/',
                    title: 'bag restoration'
                },
                {
                    link: '/',
                    title: 'Casali Sole Protectors'
                },
                {
                    link: '/',
                    title: 'Jacket Restoration'
                },
            ]
        },
        {
            link: '/',
            title: 'Products'
        },
        {
            link: '/',
            title: 'Contacts'
        },
        {
            link: '/',
            title: 'en|ge'
        }
    ]

    const handleToggleMenu = () => {
        setIsOpen(prev => !prev)

        if (isOpenSubMenu) setIsOpenSubMenu(false)
    }

    const handleToggleSubMenu = () => {
        setIsOpenSubMenu(prev => !prev)
    }

    return (
        <div className={'flex flex-col w-full'}>
            <div className={'flex items-center justify-between py-6 px-4 desktop:px-10'}>
                <Icon id={'logo-text'} width={182} height={13}/>
                <Button
                    type="button"
                    onClick={handleToggleMenu}
                    className="relative w-8 h-6 flex items-center justify-center"
                >
                    <motion.span
                        initial={false}
                        animate={{rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -3}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="absolute w-8 h-[0.5px] bg-primary-cl"
                    />
                    <motion.span
                        initial={false}
                        animate={{rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 3}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="absolute w-8 h-[0.5px] bg-primary-cl"
                    />
                </Button>

            </div>
            <motion.ul
                initial={{height: 0, opacity: 0}}
                animate={{height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0}}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="absolute top-[72px] left-0 z-40 w-full bg-primary-bg overflow-hidden pb-6 px-4"
            >
                {
                    links.map(el => (
                        <li key={el.title}>
                            {
                                el.links ? (
                                    <Button type={'button'} className={''} onClick={handleToggleSubMenu}>
                                        <p className={'text-[12px] uppercase'}>{el.title}</p>
                                        {isOpenSubMenu ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                                    </Button>
                                ) : (
                                    <Button type={'link'} className={''} link={el.link} onClick={handleToggleMenu}>
                                        <p className={'uppercase text-[12px]'}>
                                            {el.title}
                                        </p>
                                    </Button>
                                )
                            }

                            {el.links && (
                                <motion.ul
                                    initial={{height: 0, opacity: 0}}
                                    animate={{height: isOpenSubMenu ? "auto" : 0, opacity: isOpenSubMenu ? 1 : 0}}
                                    transition={{duration: 0.3, ease: "easeInOut"}}
                                    className="overflow-hidden"
                                >
                                    {
                                        el.links.map(subEl => (
                                            <li className={'pl-4'} key={subEl.title}>
                                                <Button
                                                    onClick={handleToggleMenu}
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
                                        ))
                                    }
                                </motion.ul>
                            )}
                        </li>
                    ))
                }
            </motion.ul>
        </div>
    );
};

const leftNav = [
    {
        link: '/',
        title: 'Home'
    },
    {
        link: '/about',
        title: 'About us'
    },
    {
        link: '/services',
        title: 'Services',
        sub: [
            {
                link: '/delicate-cleaning',
                title: 'delicate cleaning'
            },
            {
                link: '/shoes',
                title: 'shoes restoration'
            },
            {
                link: '/bag-restoration',
                title: 'bag restoration'
            },
            {
                link: '/casali-sole-protectors',
                title: 'Casali Sole Protectors'
            },
            {
                link: '/jacket-restoration',
                title: 'Jacket Restoration'
            },
        ]
    },
]

const rightNav = [
    {
        link: '/products',
        title: 'Products'
    },
    {
        link: '/contacts',
        title: 'Contacts'
    },
]

const Header = () => {
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)
    const {width} = useWindowDimensions()

    const handleChangeLanguage = () => {
        console.log('change language')
    }

    const handleClickSubMenu = () => {
        setIsOpenSubMenu(prevState => !prevState)
    }

    if (width < 1024) {
        return <MobileMenu/>
    }

    return (
        <div className={'flex items-center justify-between py-7 px-4 desktop:px-10'}>
            <ul className={'flex gap-2 desktop:gap-[42px]'}>
                {leftNav.map(el => (
                        <li key={el.title} className={'relative'}>
                            {el.sub ? (
                                <Button
                                    type={'button'}
                                    onClick={handleClickSubMenu}
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
                            {isOpenSubMenu && (
                                <ul className={'absolute left-0 z-100 flex flex-col gap-2 pl-4 bg-primary-bg'}>
                                    {el.sub?.map(subEl => (
                                        <li key={subEl.title} className={'min-w-[280px]'}>
                                            <Button
                                                type={'link'}
                                                link={subEl.link}
                                                onClick={handleClickSubMenu}
                                                className={'uppercase text-[14px]'}
                                            >
                                                {subEl.title}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )
                )}
            </ul>
            <Icon id={'logo-text'} width={294} height={20}/>
            <div className={'flex items-center gap-2 desktop:gap-[42px]'}>
                <ul className={'flex gap-2 desktop:gap-[42px]'}>
                    {rightNav.map(el => (
                            <li key={el.title}>
                                <Button type={'link'} link={el.link} className={'uppercase text-[14px]'}>
                                    {el.title}
                                </Button>
                            </li>
                        )
                    )}
                </ul>
                <Button type={'button'} className={'text-[14px]'} onClick={handleChangeLanguage}>EN|GE</Button>
            </div>
        </div>
    );
};

export default Header;