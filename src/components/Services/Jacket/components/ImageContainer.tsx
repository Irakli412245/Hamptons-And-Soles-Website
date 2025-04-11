import React from "react";

interface IProps {
    imageUrl: string;
    width?: string;
    height?: string;
}

const ImageContainer: React.FC<IProps> = ({imageUrl, width = 'full', height = '400px' }) => {
    return (
        <div
            className={`flex justify-center items-center w-${width} h-[${height}] table:h-[410px] bg-cover bg-center bg-no-repeat`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})`
            }}
        ></div>
    );
};

export default ImageContainer;