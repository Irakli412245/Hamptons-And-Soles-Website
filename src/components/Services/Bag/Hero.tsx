import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from "../../../hooks/useWindowDimensions.tsx";

import heroImage from '../../../../public/images/services/bag/bag-hero-1.png'
import heroImageMobile from '../../../../public/images/services/bag/bag-hero-mobile-1.png'

const Hero = memo(() => {
    const { t } = useTranslation();
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <div
            className="flex justify-center items-center w-full h-[700px] table:h-[467px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
                    isMobile ? heroImageMobile : heroImage
                })`
            }}
        >
            <div className={'flex flex-col justify-center items-center gap-6'}>
                <h2 className={'font-seasons font-normal text-[40px] table:text-[64px] leading-[150%] uppercase text-center'}>
                    {t('bag.heroTitle.firstLine')}
                    {isMobile && <br/>}
                    {t('bag.heroTitle.secondLine')}
                </h2>
                <span className={'block w-[100px] table:w-[140px] h-[0.5px] bg-primary-cl'}></span>
                <p className={'font-light text-[13px] table:text-[14px] leading-[150%] tracking-[0.1em] uppercase text-center'}>
                    {t('bag.heroSubtitle.firstLine')}
                    <br/>
                    {t('bag.heroSubtitle.secondLine')}
                </p>
            </div>
        </div>
    );
});

export default Hero;