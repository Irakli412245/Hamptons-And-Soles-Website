import React from "react";

interface IProps {
    children: React.ReactNode;
    className: string;
}

const ServicesCard: React.FC<IProps> = ({children, className}) => {
    return (
        <div
            className={`flex flex-col justify-center items-center px-7 table:px-16 desktop:px-24 py-7 table:py-24 ${className}`}
        >
            {children}
        </div>
    );
};

export default ServicesCard;