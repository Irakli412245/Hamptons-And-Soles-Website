import Icon from "../UI/Icon.tsx";
import Button from "../UI/Button.tsx";

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

const Footer = () => {
    return (
        <div className={'flex items-center justify-between py-8 px-10'}>
            <ul className={'flex gap-[8px] md:gap-[20px] lg:gap-[42px]'}>
                {leftNav.map(el => (
                        <li key={el.title}>
                            <Button type={'link'} title={el.title} link={el.link} className={''}/>
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