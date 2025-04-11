import Hero from "./Hero.tsx";
import Price from "./Price.tsx";
import ImageContainer from "../CasaliSoleProtectors/components/ImageContainer.tsx";
import LeatherJacketCareInstructions from "./LeatherJacketCareInstructions.tsx";

import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

import bgImageMobile2 from "../../../../public/images/services/jacket/hero-bg-mobile-2.png";
import bgImage2 from "../../../../public/images/services/jacket/hero-bg-2.png";

const Jacket = () => {
    const {width} = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <div className={'bg-secondary-bg'}>
            <Hero/>
            <Price/>
            <div className={'py-7'}>
                <ImageContainer imageUrl={isMobile ? bgImageMobile2 : bgImage2}/>
            </div>
            <LeatherJacketCareInstructions/>
        </div>
    );
};

export default Jacket;