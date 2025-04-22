import React from "react";

interface IProps {
    children: React.ReactNode;
    className?: string;
    type: 'images' | 'content';
}

const Card: React.FC<IProps> = ({children, className, type}) => {

    if (type === 'images') {
        return (
            <div className={`flex flex-1 flex-col items-center justify-center py-10 table:py-36 ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div className={`flex flex-1 flex-col items-center justify-center py-10 table:py-36 px-7 table:px-20 desktop:px-32 ${className}`}>
            {children}
        </div>
    );
};

export default Card;