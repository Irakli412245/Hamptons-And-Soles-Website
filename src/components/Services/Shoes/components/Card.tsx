import React from 'react';

interface IProps {
    children: React.ReactNode
    className: string
}

const Card: React.FC<IProps> = ({children, className}) => {
    return (
        <section
            className={`flex flex-col justify-center items-center px-[30px] py-[30px] table:px-[50px] ${className}`}
        >
            {children}
        </section>
    );
};

export default Card;