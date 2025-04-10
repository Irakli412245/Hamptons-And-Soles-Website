import * as React from "react";

import sprite from '../../../public/images/symbol-defs.svg';

interface IProps {
    id: string;
    width: number;
    height: number;
    color?: string;
    className?: string;
}

const Icon: React.FC<IProps> = ({id, color, height, width, className}) => {
    return (
        <svg
            className={`inline-block ${className}`}
            width={width}
            height={height}
            fill={color}
        >
            <use href={`${sprite}#icon-${id}`}/>
        </svg>
    );
};

export default Icon;