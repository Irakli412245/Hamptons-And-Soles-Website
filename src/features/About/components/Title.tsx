import React from 'react';

interface IProps {
  children: React.ReactNode;
  className: string;
}

const Title: React.FC<IProps> = ({ children, className }) => {
  return (
    <h2
      className={`font-seasons font-normal text-[54px] desktop:text-[120px] leading-[150%]
       tracking-[0.1em] uppercase text-center ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
