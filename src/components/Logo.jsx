import React from "react";
import { FaReact } from "react-icons/fa6";

const Logo = () => {
    return (
        <div className="flex justify-start items-center gap-2">
            <FaReact className="text-3xl" />
            <h4 className="font-RobotoMono text-2xl font-bold">
                Web Developer
            </h4>
        </div>
    );
};

export default Logo;
