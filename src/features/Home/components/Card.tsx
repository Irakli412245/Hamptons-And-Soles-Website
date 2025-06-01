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
        <div
          className={`flex flex-col justify-center items-center py-10 table:py-[75px] ${className}`}
        >
          {children}
        </div>
      );
    case 'content':
      return (
        <div
          className={`flex flex-col justify-center items-center p-10 table:py-[75px] ${className}`}
        >
          {children}
        </div>
      );
  }
};

export default Card;
