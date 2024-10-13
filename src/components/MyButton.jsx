import React from "react";

const MyButton = ({
    type = "button",
    color = "bg-primary",
    textColor = "text-darker",
    text = "Click me",
    icon = null,
    className = "",
    ...props
}) => {
    return (
        <button
            type={type}
            className={`inline-block w-full font-RobotoMono rounded-lg ${color} ${textColor} px-5 py-3 font-medium text-sm sm:w-auto flex items-center justify-center ${className}`}
            {...props}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    );
};

export default MyButton;
