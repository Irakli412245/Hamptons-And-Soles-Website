import Hero from "./Hero.tsx";
import Price from "./Price.tsx";
import ImageContainer from "../CasaliSoleProtectors/components/ImageContainer.tsx";

import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

import bgImageMobile2 from "../../../../public/images/services/bag/bag-hero-mobile-2.png";
import bgImage2 from "../../../../public/images/services/bag/bag-hero-2.png";
import bgImage3 from "../../../../public/images/services/bag/bag-hero-3.png";
import LeatherBagCareInstructions from "./LeatherBagCareInstructions.tsx";

const Bag = () => {
    const {width} = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <div className={'bg-secondary-bg'}>
            <Hero/>
            <Price/>
            <div className={'py-7'}>
                {isMobile ? (
                    <ImageContainer imageUrl={bgImageMobile2}/>
                ) : (
                    <div className={'flex'}>
                        <ImageContainer imageUrl={bgImage2}/>
                        <ImageContainer imageUrl={bgImage3}/>
                    </div>
                )}
            </div>
            <LeatherBagCareInstructions/>
        </div>
    );
};

export default Bag;