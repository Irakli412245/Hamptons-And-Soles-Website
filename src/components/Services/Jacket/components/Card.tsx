import React from "react";

interface IProps {
    children: React.ReactNode;
    className: string;
}

const Card: React.FC<IProps> = ({children, className}) => {
    return (
        <div className={`flex flex-col justify-center items-center px-7 py-7 ${className}`}>
            {children}
        </div>
    );
};

export default Card;