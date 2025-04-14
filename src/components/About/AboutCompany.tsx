import Card from "./components/Card.tsx";
import { useTranslation } from 'react-i18next';

import CardTitle from "./components/CardTitle.tsx";
import CardText from "./components/CardText.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const AboutCompany = () => {
    const { t } = useTranslation();
    const {width} = useWindowDimensions()

    return (
        <Card className={'pt-[60px] table:pt-[140px]'}>
            <CardTitle className={'flex flex-col table:block mb-[60px] table:mb-[100px] px-10'}>
                {width <= 600 ? (
                    <>
                        <span className="text-left table:text-center">About</span>
                        <span className="text-right table:text-center">company</span>
                    </>
                ) : (
                    t('about.company.title')
                )
                }

            </CardTitle>
            {
                width < 768 ? (
                    <ul className={'flex flex-col'}>
                        <li>
                            <img src={'/images/about/company/about-company-1.png'} className={'w-full h-[140px]'}/>
                            <CardText className={'flex flex-col gap-4 p-[50px]'}>
                                <>
                                    <span>
                                        {t('about.company.origin')}
                                    </span>
                                    <span>
                                        {t('about.company.nameMeaning')}
                                    </span>
                                </>
                            </CardText>
                        </li>
                        <li>
                            <img src={'/images/about/company/about-company-2.png'} className={'w-full h-[140px]'}/>
                            <CardText className={'flex flex-col gap-4 p-[50px]'}>
                                <>
                                    <span>
                                        {t('about.company.soleProtection')}
                                    </span>
                                    <span>
                                        {t('about.company.casaliSoles')}
                                    </span>
                                </>
                            </CardText>
                        </li>
                    </ul>
                ) : (
                    <ul className={'flex flex-col gap-10'}>
                        <li className={'flex gap-4'}>
                            <CardText className={'p-10'}>
                                {t('about.company.origin')} {t('about.company.nameMeaning')}
                            </CardText>
                            <img src={'/images/about/company/about-company-1.png'} className={'w-1/2 h-[240px]'}/>
                        </li>
                        <li className={'flex gap-4'}>
                            <img src={'/images/about/company/about-company-2.png'} className={'w-1/2 h-[240px]'}/>
                            <CardText className={'p-10'}>
                                {t('about.company.soleProtection')} {t('about.company.casaliSoles')}
                            </CardText>
                        </li>
                    </ul>
                )
            }
        </Card>
    );
};

export default AboutCompany;