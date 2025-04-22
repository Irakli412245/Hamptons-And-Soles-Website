import {useEffect, useState} from "react";

import heroBgMobile from '../../../public/images/home/hero/home-hero-mobile.png';
import heroBgDesktop from '../../../public/images/home/hero/home-hero.png';

import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

import Icon from "../UI/Icon.tsx";

const Hero = () => {
    const {width} = useWindowDimensions()
    const [isSmall, setIsSmall] = useState(false)

    useEffect(() => {
        if (width < 768) {
            setIsSmall(true)
        } else {
            setIsSmall(false)
        }
    }, [width])

    return (
        <div
            className="flex justify-center items-center w-full h-[600px] table:h-[810px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${width <= 425 ? heroBgMobile:  heroBgDesktop})`
            }}
        >
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <Icon
                    id={isSmall ? 'slogan-mobile' : 'Hamptons__Soles_New_Slogan'}
                    width={isSmall ? 104 : 650}
                    height={isSmall ? 60 : 292}
                />
            </div>
        </div>
    );
};

export default Hero;