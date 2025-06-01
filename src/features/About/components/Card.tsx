import React from 'react';

interface IProps {
  children: React.ReactNode;
  className: string;
  type: 'image' | 'content';
}

const Card: React.FC<IProps> = ({ children, className, type }) => {
  switch (type) {
    case 'image':
      return (
        <div className={`flex flex-col py-[30px] table:py-[50px] ${className}`}>{children}</div>
      );
    case 'content':
      return (
        <div className={`flex flex-col py-[30px] table:py-[50px] px-[30px] ${className}`}>
          {children}
        </div>
      );
  }
};

export default Card;
