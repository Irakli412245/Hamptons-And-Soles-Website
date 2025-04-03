import {FaArrowUpLong} from "react-icons/fa6";

import Icon from "../UI/Icon.tsx";
import Button from "../UI/Button.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const MobileFooterContent = () => {
    const handleTabScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className={'flex flex-col items-center justify-center gap-4 py-9'}>
            <ul className={'flex justify-center gap-1 '}>
                <li>
                    <Button type={'link'} className={''} link={'/'}>
                        <Icon id={'instagram'} width={32} height={32}/>
                    </Button>
                </li>
                <li>
                    <Button type={'link'} className={''} link={'/'}>
                        <Icon id={'facebook'} width={32} height={32}/>
                    </Button>
                </li>
                <li>
                    <Button type={'link'} className={''} link={'/'}>
                        <Icon id={'tiktok'} width={32} height={32}/>
                    </Button>
                </li>
            </ul>
            <Button type={'button'} className={''} onClick={handleTabScrollUp}>
                <p className={'text-xl font-normal uppercase'}>Scroll to top</p>
                <FaArrowUpLong/>
            </Button>
            <p className={'text-[12px] text-center'}>
                Hamptons & Soles © 2024 ALL RIGHTS
                RESERVED.
            </p>
        </div>
    )
}


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
        <div className={'flex items-center justify-between py-7 px-10'}>
            <ul className={'flex gap-[8px] md:gap-[20px] lg:gap-[42px]'}>
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
            <Icon id={'logo-text'} width={294} height={20}/>
            <div className={'flex max-w-96 items-center gap-[8px] md:gap-[20px] lg:gap-[42px]'}>
                <p className={'text-[12px]'}>
                    Hamptons & Soles © 2024 ALL RIGHTS
                    RESERVED.
                </p>
            </div>
        </div>
    );
};

export default Footer;