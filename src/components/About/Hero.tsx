import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const Hero = () => {
    const {width} = useWindowDimensions()

    return (
        <div
            className={'flex w-full h-[600px] table:h-[810px] bg-cover bg-center bg-no-repeat'}
            style={{
                backgroundImage: `url(${width >= 768 ? '/images/about/hero/about-hero.png' : '/images/about/hero/about-hero-mobile.png'})`
            }}
        />
    );
};

export default Hero;