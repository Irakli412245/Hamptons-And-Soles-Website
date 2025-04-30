import React from "react";

interface IProps {
    children: React.ReactNode;
    className?: string;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const CardTitle: React.FC<IProps> = ({children, className, type}) => {

    switch (type) {
        case 'h1':
            return (
                <h1 className={`text-4xl font-bold ${className}`}>
                    {children}
                </h1>
            )
        case 'h2':
            return (
                <h2 className={`font-seasons font-normal text-[22px] table:text-[28px] leading-[120%] table:leading-[150%] tracking-widest uppercase text-center ${className}`}>
                    {children}
                </h2>
            )
        case 'h3':
            return (
                <h3 className={`font-light text-[14px] leading-[150%] tracking-widest uppercase text-center ${className}`}>
                    {children}
                </h3>
            )
        case 'h4':
            return (
                <h4 className={`text-xl font-bold ${className}`}>
                    {children}
                </h4>
            )
        case 'h5':
            return (
                <h5 className={`text-lg font-bold ${className}`}>
                    {children}
                </h5>
            )
        case 'h6':
            return (
                <h6 className={`text-base font-bold ${className}`}>
                    {children}
                </h6>
            )
        case 'p':
            return (
                <p className={`font-light text-[14px] leading-[150%] ${className}`}>
                    {children}
                </p>
            )
    }
};

export default CardTitle;