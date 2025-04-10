import React from 'react';

interface IProps {
    children: React.ReactNode
    className: string
}

const CardSubTitle: React.FC<IProps> = ({children, className}) => {
    return (
        <p className={`font-seasons font-normal text-[22px] leading-[120%] uppercase text-center ${className}`}>
            {children}
        </p>
    );
};

export default CardSubTitle;