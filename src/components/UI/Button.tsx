import * as React from "react";
import {Link} from "react-router-dom";

interface IProps {
    type: 'button' | 'link';
    title: string
    className: string;
    onClick?: () => void
    link?: string
}

const Button: React.FC<IProps> = ({type, className, link, onClick, title}) => {
    switch (type) {
        case "link":
            return <Link to={link!} className={`${className} flex p-2 hover:opacity-70`}>{title}</Link>
        case "button":
            return <button className={`${className} flex p-2 hover:opacity-70`} onClick={onClick}>{title}</button>
        default:
            return null
    }
};

export default Button;