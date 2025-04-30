import {useEffect, useState} from "react";

import Icon from "../UI/Icon.tsx";

import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

import heroImage from '../../../public/images/home/hero/hero.png'

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
            className="flex justify-center items-center w-full h-[700px] table:h-[810px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${heroImage})`
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