import React from "react";

interface IProps {
    imageUrl: string;
}

const ImageContainer: React.FC<IProps> = ({imageUrl}) => {
    return (
        <div
            className="flex justify-center items-center w-full h-[600px] table:h-[810px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})`
            }}
        ></div>
    );
};

export default ImageContainer;