import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

import heroImage from '../../../../public/images/services/shoes/hero-image.png'
import heroImageMobile from '../../../../public/images/services/shoes/hero-image-mobile.png'

const Hero = () => {
    const {width} = useWindowDimensions();

    return (
        <div
            className="flex w-full h-[600px] table:h-[810px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
                    width >= 768 ? heroImage : heroImageMobile
                })`
            }}
        />
    );
};

export default Hero;