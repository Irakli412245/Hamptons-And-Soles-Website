import React from 'react';

interface IProps {
    children: React.ReactNode
    className: string
}

const CardText: React.FC<IProps> = ({children, className}) => {
    return (
        <p className={`font-light text-[13px] leading-[140%] tracking-[0.1em] ${className}`}>
            {children}
        </p>
    );
};

export default CardText;