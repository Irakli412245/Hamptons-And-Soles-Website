import {useEffect, useState} from "react";

import Icon from "../UI/Icon.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

import mainBg from '../../../public/images/home/main-bg.png'

const CompanyLogo = () => {
    const {width} = useWindowDimensions()
    const [isSmall, setIsSmall] = useState(false)

    useEffect(() => {
        if (width < 1024) {
            setIsSmall(true)
        } else {
            setIsSmall(false)
        }
    }, [width])

    return (
        <div
            className="flex justify-center items-center w-full h-[600px] table:h-[810px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${mainBg})`
            }}
        >
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <Icon
                    id={isSmall ? 'Slogan11' : 'LogoHero'}
                    width={isSmall ? 104 : 650}
                    height={isSmall ? 60 : 292}
                />
            </div>
        </div>
    );

    // return (
    //     <div>
    //         <div className="relative w-full h-[490px] table:h-[700px] desktop:h-[810px]">
    //             <div
    //                 className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
    //                 style={{backgroundImage: `url(${mainBg})`}}
    //             />
    //             <div className="relative z-10 flex flex-col items-center justify-center h-full">
    //                 <Icon
    //                     id={isSmall ? 'Slogan11' : 'LogoHero'}
    //                     width={isSmall ? 104 : 650}
    //                     height={isSmall ? 60 : 292}
    //                 />
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default CompanyLogo;