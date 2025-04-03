import * as React from "react";

import sprite from '../../assets/images/symbol-defs.svg';

interface IProps {
    id: string;
    width: number;
    height: number;
    color?: string;
}

const Icon: React.FC<IProps> = ({id, color, height, width}) => {
    return (
        <svg
            className={`inline-block`}
            width={width}
            height={height}
            fill={color}
        >
            <use href={`${sprite}#icon-${id}`}/>
        </svg>
    );
};

export default Icon;