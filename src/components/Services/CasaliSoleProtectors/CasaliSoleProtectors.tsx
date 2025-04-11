import Hero from "./Hero.tsx";
import Price from "./Price.tsx";
import ImageContainer from "./components/ImageContainer.tsx";
import LuxuryShoesBenefits from "./LuxuryShoesBenefits.tsx";

// import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

import bgImageMobile2 from '../../../../public/images/services/casaliSoleProtectors/bg-hero-mobile-2.png';
import bgImageMobile3 from '../../../../public/images/services/casaliSoleProtectors/bg-hero-mobile-3.png';

const CasaliSoleProtectors = () => {
    // const {width} =  useWindowDimensions()
    // const isMobile = width < 768;

    return (
        <div className={'bg-secondary-bg'}>
            <Hero/>
            <Price/>
            <div className={'py-7'}>
                <ImageContainer imageUrl={bgImageMobile2}/>
            </div>
            <LuxuryShoesBenefits/>
            <div className={'pt-7 pb-[60px]'}>
                <ImageContainer imageUrl={bgImageMobile3}/>
            </div>
        </div>
    );
};

export default CasaliSoleProtectors;