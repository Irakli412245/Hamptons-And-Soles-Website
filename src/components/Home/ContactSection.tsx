import Title from "../UI/Title.tsx";
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
    const { t } = useTranslation();
    
    return (
        <div
            className={'flex flex-col justify-center items-center py-[70px] table:py-[207px] mobile:px-[56px] bg-secondary-bg'}>
            <div data-aos='fade-up'>
                <Title type={'h2'} className={'mb-[70px]'}>
                    {t('home.contactSection.title')}
                </Title>
                <ul className="grid grid-cols-1 table:grid-cols-2 gap-[60px] text-[14px] mb-[77px] justify-items-center">
                    <li className="flex flex-col gap-8 w-[300px]">
                        <p className="block px-4 uppercase text-center">
                            {t('home.contactSection.addressTbilisi')}
                        </p>
                        <span className="w-full h-[0.5px] bg-primary-cl"></span>
                        <p className="block px-4 uppercase text-center">
                            {t('home.contactSection.hoursTbilisi')}
                        </p>
                    </li>
                    <li className="flex flex-col gap-8 w-[300px]">
                        <p className="uppercase text-center">
                            {t('home.contactSection.addressAxis')}
                        </p>
                        <span className="w-full h-[0.5px] bg-primary-cl"></span>
                        <p className="uppercase text-center">
                            {t('home.contactSection.hoursAxis')}
                        </p>
                    </li>
                </ul>
                <div className={'flex flex-col items-center gap-1'}>
                    <a href="tel:+995555174848">+995 555 17 48 48</a>
                    <a href="mailto:Info@hamptons.ge">Info@hamptons.ge</a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;