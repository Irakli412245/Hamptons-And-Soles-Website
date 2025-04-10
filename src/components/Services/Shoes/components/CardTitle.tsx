import React from 'react';

interface IProps {
    children: React.ReactNode
    className: string
}

const CardTitle: React.FC<IProps> = ({children, className}) => {
    return (
        <h2 className={`font-seasons font-normal text-[40px] table:text-[54px] leading-[150%] uppercase text-center ${className}`}>
            {children}
        </h2>
    );
};

export default CardTitle;