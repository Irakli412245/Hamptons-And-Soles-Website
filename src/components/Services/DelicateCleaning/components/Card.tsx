import React from "react";

interface IProps {
    children: React.ReactNode;
    className: string;
    title: string;
    imageUrl: string;
    price: string;
}

const Card: React.FC<IProps> = ({children, className, title, imageUrl, price}) => {
    return (
        <div className={`flex flex-col table:flex-row w-full border-[0.5px] border-primary-cl ${className}`}>
            <div
                className={'relative flex-1 w-full table:min-w-[350px] table:max-w-[740px] aspect-[4/3] table:aspect-auto overflow-hidden border-b-[0.5px] table:border-b-0 table:border-r-[0.5px] border-primary-cl'}
            >
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className={'flex flex-col justify-between flex-1 pt-[50px] pb-5 table:pb-0'}>
                <div>
                    <h3 className={'px-[30px] table:px-[60px] mb-[30px] font-semibold text-sm leading-[150%] uppercase table:text-[15px] table:leading-[125%]'}>
                        / {title}
                    </h3>
                    <div className={'px-[30px] table:px-[60px] mb-[50px] font-light text-[13px] leading-[140%] tracking-[0.1em] table:text-[14px] table:leading-[150%]'}>
                        {children}
                    </div>
                </div>
                <div className={'flex justify-center items-center table:justify-end mx-[30px] table:mx-0 p-5 border-[0.5px] table:border-x-0 table:border-b-0 border-primary-cl bg-primary-bg'}>
                    <p className={'font-semibold text-[13px] leading-[150%] table:text-[14px] uppercase'}>
                       Price: {price} gel
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;