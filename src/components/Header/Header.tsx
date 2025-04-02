import Icon from "../UI/Icon.tsx";
import Button from "../UI/Button.tsx";

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
        title: 'Services'
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
    const handleChangeLanguage = () => {
        console.log('change language')
    }

    return (
        <div className={'flex items-center justify-between py-8 px-10'}>
            <ul className={'flex gap-[8px] md:gap-[20px] lg:gap-[42px]'}>
                {leftNav.map(el => (
                        <li key={el.title}>
                            <Button type={'link'} title={el.title} link={el.link} className={'uppercase'}/>
                        </li>
                    )
                )}
            </ul>
            <Icon id={'logo-text'} width={294} height={20}/>
            <div className={'flex items-center gap-[8px] md:gap-[20px] lg:gap-[42px]'}>
                <ul className={'flex gap-[8px] md:gap-[20px] lg:gap-[42px]'}>
                    {rightNav.map(el => (
                            <li key={el.title}>
                                <Button type={'link'} title={el.title} link={el.link} className={'uppercase'}/>
                            </li>
                        )
                    )}
                </ul>
                <Button type={'button'} title={'EN|GE'} className={''} onClick={handleChangeLanguage}/>
            </div>
        </div>
    );
};

export default Header;