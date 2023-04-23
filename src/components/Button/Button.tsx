import React from "react";
import './Button.css';

interface ButtonProps {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
    fontSize: string
}


const Button: React.FC<ButtonProps> = ({
                     border,
                     color,
                     children,
                     height,
                     onClick,
                     radius,
                     width,
                     fontSize
                 }) => {
    return (
        <button
            onClick={onClick}

            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width,
                fontSize

            }}
        >
            {children}
        </button>
    );
}

export default Button;