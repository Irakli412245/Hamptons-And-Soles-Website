import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

import aboutHero from '../../../public/images/about/hero/about-hero.png'
import aboutHeroMobile from '../../../public/images/about/hero/about-hero-mobile.png'

const Hero = () => {
    const {width} = useWindowDimensions()

    return (
        <div
            className={'flex w-full h-[600px] table:h-[810px] bg-cover bg-center bg-no-repeat'}
            style={{
                backgroundImage: `url(${width >= 768 ? aboutHero : aboutHeroMobile})`
            }}
        />
    );
};

export default Hero;