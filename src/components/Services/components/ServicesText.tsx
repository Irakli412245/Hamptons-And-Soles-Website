import React from "react";

type TextVariant = 'variant1' | 'variant2' | 'variant3' | 'variant4' | 'variant5' | 'variant6';

interface IProps {
    children: React.ReactNode;
    className?: string;
    variant?: TextVariant;
}

const ServicesText: React.FC<IProps> = ({ children, className = '', variant = 'variant1' }) => {
    const getVariantClasses = (): string => {
        switch (variant) {
            case 'variant1':
                return 'font-seasons font-normal text-[22px] leading-[120%] uppercase text-center table:text-[28px] table:leading-[130%] table:tracking-[0.1em]';
            case 'variant2':
                return 'font-montserrat font-light text-[13px] leading-[140%] tracking-[0.1em] table:text-[14px] table:leading-[150%]';
            case 'variant3':
                return 'italic font-light text-[11px] leading-[130%] tracking-[0.1em] table:text-[14px] table:leading-[150%] table:text-center';
            case 'variant4':
                return 'font-semibold text-[13px] leading-[125%] uppercase table:text-[18px] table:leading-[140%]';
            case 'variant5':
                return 'font-light text-[10px] leading-[150%] tracking-[0.1em] uppercase table:text-[10px]';
            case 'variant6':
                return 'font-seasons font-normal text-center text-[22px] leading-[120%] tracking-[0.1em] uppercase table:text-[24px] table:leading-[130%]';
            default:
                return 'font-light text-[13px] leading-[140%] table:text-[14px] table:leading-[150%]';
        }
    };

    return (
        <p className={`${getVariantClasses()} ${className}`}>
            {children}
        </p>
    );
};

export default ServicesText;