import React from "react";

interface IProps {
    children: React.ReactNode;
    className: string;
    type: 'uppercase' | 'normal' | 'accent-uppercase'
}

const CardText: React.FC<IProps> = ({children, className, type}) => {
    if (type === 'accent-uppercase') {
        return (
            <p className={`font-light text-[10px] leading-[150%] tracking-[0.1em] uppercase ${className}`}>
                {children}
            </p>
        )
    }

    if (type === 'uppercase') {
        return (
            <p className={`font-semibold text-[13px] leading-[125%] table:text-[18px] table:leading-[140%] uppercase ${className}`}>
                {children}
            </p>
        )
    }

    return (
        <p
            className={`font-light text-[13px] leading-[140%] tracking-[0.1em] table:text-[14px] table:leading-[150%] ${className}`}
        >
            {children}
        </p>
    );
};

export default CardText;