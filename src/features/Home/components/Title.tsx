import React from 'react';

interface IProps {
  children: React.ReactNode;
  className: string;
}

const Title: React.FC<IProps> = ({ children, className }) => {
  return (
    <h2
      className={
        `font-seasons font-normal text-[22px] table:text-[28px] leading-[120%] ` +
        `table:leading-[150%] tracking-[0.1em] uppercase text-center ${className}`
      }
    >
      {children}
    </h2>
  );
};

export default Title;
