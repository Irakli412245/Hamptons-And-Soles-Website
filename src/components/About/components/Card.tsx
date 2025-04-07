import React from "react";

interface IProps {
    children: React.ReactNode;
    className: string;
}

const Card: React.FC<IProps> = ({children, className}) => {
    return (
        <div className={`py-[30px] table:py-[70px] ${className}`}>
            {children}
        </div>
    );
};

export default Card;