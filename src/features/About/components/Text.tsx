import React from 'react';

interface IProps {
  children: React.ReactNode;
  className: string;
}

const Text: React.FC<IProps> = ({ children, className }) => {
  return (
    <p className={`flex font-light text-[14px] leading-[150%] tracking-[0.1em] ${className}`}>
      {children}
    </p>
  );
};

export default Text;
