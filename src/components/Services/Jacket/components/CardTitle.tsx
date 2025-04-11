import React from "react";

interface IProps {
    children: React.ReactNode;
    className: string;
}

const CardTitle: React.FC<IProps> = ({children, className}) => {
    return (
        <h2 className={`font-seasons font-normal text-[44px] leading-[100%] uppercase text-left table:text-[60px] table:leading-[120%] table:text-center ${className}`}>
            {children}
        </h2>
    );
};

export default CardTitle;