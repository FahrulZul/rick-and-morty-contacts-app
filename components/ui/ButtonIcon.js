import React, { Children } from "react";

const ButtonIcon = ({ Icon, iconSize = 25, onClick, children }) => {
    return (
        <>
            <button
                className="flex items-center hover:bg-neutral-100 py-3 pl-3 pr-4 rounded-lg my-6 max-sm:-ml-5"
                onClick={onClick}
            >
                <Icon weight="bold" size={iconSize} />
                {children}
            </button>
        </>
    );
};

export default ButtonIcon;
