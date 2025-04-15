import React from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions.tsx";

interface IProps {
    children?: React.ReactNode;
    className: string;
    imageUrl: string;
    imageUrlMobile?: string;
}

const ServicesCardImage: React.FC<IProps> = ({children, className, imageUrl, imageUrlMobile}) => {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    
    const displayImage = isMobile && imageUrlMobile ? imageUrlMobile : imageUrl;
    
    return (
        <div
            className={`flex flex-col justify-center items-center w-full bg-cover bg-center bg-no-repeat px-7 table:px-16 desktop:px-24 py-7 table:py-24 ${className}`}
            style={{
                backgroundImage: `url(${displayImage})`
            }}
        >
            {children}
        </div>
    );
};

export default ServicesCardImage;