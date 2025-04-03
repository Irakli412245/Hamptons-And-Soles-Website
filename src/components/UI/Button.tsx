import * as React from "react";
import {Link} from "react-router-dom";

interface IProps {
    type: 'button' | 'link';
    children: React.ReactNode
    className: string;
    onClick?: () => void
    link?: string
}

const Button: React.FC<IProps> = ({type, className, link, onClick, children}) => {
    switch (type) {
        case "link":
            return (
                <Link
                    to={link!}
                    className={`${className} flex items-center gap-2 p-2 hover:opacity-70`}
                >
                    {children}
                </Link>
            )
        case "button":
            return (
                <button
                    className={`${className} flex justify-center items-center gap-2 p-2 hover:opacity-70`}
                    onClick={onClick}>
                    {children}
                </button>
            )
        default:
            return null
    }
};

export default Button;