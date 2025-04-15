import React from "react";

interface ITitleProps {
    children: React.ReactNode;
    className?: string;
}

interface ISubtitleProps {
    children: React.ReactNode;
    className?: string;
}

const ServicesTitle: React.FC<ITitleProps> = ({ children, className = '' }) => {
    return (
        <h2 className={`font-seasons font-normal text-[40px] table:text-[64px] leading-[150%] uppercase text-center ${className}`}>
            {children}
        </h2>
    );
};

const ServicesSubtitle: React.FC<ISubtitleProps> = ({ children, className = '' }) => {
    return (
        <p className={`font-light text-[13px] table:text-[14px] leading-[150%] tracking-[0.1em] uppercase text-center ${className}`}>
            {children}
        </p>
    );
};

export { ServicesSubtitle };
export default ServicesTitle;