import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

import heroImage from '../../../../public/images/services/jacket/hero-bg-1.png'
import heroImageMobile from '../../../../public/images/services/jacket/hero-bg-mobile-1.png'

const Hero = () => {
    const {width} = useWindowDimensions();

    return (
        <div
            className="flex justify-center items-center w-full h-[600px] table:h-[810px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
                    width >= 768 ? heroImage : heroImageMobile
                })`
            }}
        >
            <div className={'flex flex-col justify-center items-center gap-6'}>
                <h2 className={'font-seasons font-normal text-[40px] table:text-[64px] leading-[150%] uppercase text-center'}>
                    Jacket restoration
                </h2>
                <span className={'block w-[100px] table:w-[140px] h-[0.5px] bg-primary-cl'}></span>
                <p className={'max-w-[287px] font-light text-[13px] table:text-[14px] leading-[150%] tracking-[0.1em] uppercase text-center'}>
                    Transforming Worn to Wonderful: Jacket Restoration in the Hamptons
                </p>
            </div>
        </div>
    );
};

export default Hero;