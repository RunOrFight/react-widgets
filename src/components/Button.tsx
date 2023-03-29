import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "active";
}

const Button: FC<ButtonProps> = ({ children, variant, ...props }) => {
    const bg = variant === "active" ? "bg-neutral-800" : "bg-neutral-600";
    return (
        <button
            className={`${bg} rounded-lg px-5 py-2 disabled:opacity-75`}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
