import { useTranslation } from 'react-i18next';

import Icon from "../UI/Icon.tsx";
import Button from "../UI/Button.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const MobileFooterContent = () => {
    const { t } = useTranslation();

    return (
        <div
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
                {t('footer.copyright')}
            </p>
        </div>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    const {width} = useWindowDimensions();

    const leftNav = [
        {
            link: '/',
            title: t('footer.facebook')
        },
        {
            link: '/',
            title: t('footer.instagram')
        },
        {
            link: '/',
            title: t('footer.tiktok')
        },
    ];

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
                    {t('footer.copyright')}
                </p>
            </div>
        </div>
    );
};

export default Footer;