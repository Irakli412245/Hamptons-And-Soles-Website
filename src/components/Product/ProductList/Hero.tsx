import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";
import heroImage from "../../../../public/images/product/product-hero.png";
import heroImageMobile from "../../../../public/images/product/product-hero-mobile.png";

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
                    Products
                </h2>
                <span className={'block w-[100px] table:w-[140px] h-[0.5px] bg-primary-cl'}></span>
                <p className={'font-light text-[13px] table:text-[14px] leading-[150%] tracking-[0.1em] uppercase text-center'}>
                    choice of the most famous shoemakers and manufactures of leather goods
                </p>
            </div>
        </div>
    );
};

export default Hero;