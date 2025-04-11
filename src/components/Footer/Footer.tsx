import {useEffect, useRef, useState} from "react";
import {IoIosArrowUp} from "react-icons/io";

import Icon from "../UI/Icon.tsx";
import Button from "../UI/Button.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";


const MobileFooterContent = () => {
    const footerRef = useRef<HTMLDivElement | null>(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleTabScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowScrollButton(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={footerRef}
            className={"relative flex flex-col items-center justify-center gap-4 py-9"}
        >
            <ul className={"flex justify-center gap-1"}>
                <li>
                    <Button type={"link"} className={""} link={"/"}>
                        <Icon id={"instagram"} width={32} height={32}/>
                    </Button>
                </li>
                <li>
                    <Button type={"link"} className={""} link={"/"}>
                        <Icon id={"facebook"} width={32} height={32}/>
                    </Button>
                </li>
                <li>
                    <Button type={"link"} className={""} link={"/"}>
                        <Icon id={"tiktok"} width={32} height={32}/>
                    </Button>
                </li>
            </ul>
            <p className={"text-[12px] text-center"}>
                Hamptons & Soles © 2024 All rights reserved.
            </p>

            {showScrollButton && (
                <button
                    onClick={handleTabScrollUp}
                    className="absolute top-6 right-6 z-50 flex justify-center items-center gap-2 rounded-full bg-black p-2 shadow-lg transition hover:scale-105"
                >
                    <IoIosArrowUp size={20}/>
                </button>
            )}
        </div>
    );
};

const Footer = () => {
    const {width} = useWindowDimensions()

    const leftNav = [
        {
            link: '/',
            title: 'Facebook'
        },
        {
            link: '/',
            title: 'Instagram'
        },
        {
            link: '/',
            title: 'Tiktok'
        },
    ]

    if (width < 1024) {
        return <MobileFooterContent/>
    }

    return (
        <div className={'grid grid-cols-3 items-center py-7'}>
            <ul className={'flex gap-8 justify-center'}>
                {leftNav.map(el => (
                        <li key={el.title}>
                            <Button type={'link'} link={el.link} className={''}>
                                <p className={'uppercase text-[14px]'}>
                                    {el.title}
                                </p>
                            </Button>
                        </li>
                    )
                )}
            </ul>
            <div className={'flex justify-center'}>
                <Icon id={'logo-text'} width={294} height={20}/>
            </div>
            <div className={'flex items-center justify-end gap-[6px] pr-8'}>
                <p className={'text-[10px]'}>
                    Hamptons & Soles
                    <br/>
                    © 2024 All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;