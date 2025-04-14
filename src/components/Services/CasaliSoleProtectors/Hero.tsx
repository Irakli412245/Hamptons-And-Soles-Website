import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

import heroImage from '../../../../public/images/services/casaliSoleProtectors/bg-hero.png'
import heroImageMobile from '../../../../public/images/services/casaliSoleProtectors/bg-hero-mobile.png'

const Hero = memo(() => {
    const { t } = useTranslation();
    const {width} = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <div
            className="flex justify-center items-center w-full h-[600px] table:h-[810px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
                    isMobile ? heroImageMobile : heroImage
                })`
            }}
        >
            <div className={'flex flex-col justify-center items-center gap-6'}>
                <h2 className={'font-seasons font-normal text-[40px] table:text-[64px] leading-[150%] uppercase text-center'}>
                    {t('casali.heroTitle')}
                </h2>
                <span className={'block w-[100px] table:w-[140px] h-[0.5px] bg-primary-cl'}></span>
                <p className={'font-light text-[13px] table:text-[14px] leading-[150%] tracking-[0.1em] uppercase text-center'}>
                    {t('casali.heroSubtitle.firstLine')}
                    <br/>
                    {t('casali.heroSubtitle.secondLine')}
                </p>
            </div>
        </div>
    );
});

export default Hero;