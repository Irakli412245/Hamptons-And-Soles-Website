import * as React from "react";

interface IProps {
    type: 'h1' | 'h2'
    children: React.ReactNode;
    className: string
}

const Title: React.FC<IProps> = ({type, children, className = ""}) => {
    if (type === 'h2') {
        return (
            <h2
                className={`font-seasons uppercase text-center text-[#fc9] text-[24px] leading-[120%] tracking-[0.1em] md:text-[28px] md:leading-[150%] ${className}`}
            >
                {children}
            </h2>
        )
    }

    return (
        <h1
            className={`font-seasons uppercase text-center text-[#fc9] 
        /* Mobile styles (default) */
        text-[24px] leading-[120%] tracking-[0.1em]
        /* Desktop styles (md and up) */
        md:text-[28px] md:leading-[150%] ${className}`}
        >
            {children}
        </h1>
    );
};

export default Title