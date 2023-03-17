import React from "react";

const Badge = ({ label, value }) => {
    return (
        <>
            <div className="bg-neutral-50 shadow py-2 px-6 rounded-lg">
                <span className="text-left font-bold text-md capitalize inline-block leading-relaxed">
                    {label}
                    <span className="block font-normal text-neutral-500">
                        {value}
                    </span>
                </span>
            </div>
        </>
    );
};

export default Badge;
