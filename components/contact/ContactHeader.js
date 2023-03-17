import React from "react";

const ContactHeader = ({ name, imageUrl }) => {
    return (
        <div className=" flex items-center mb-16 max-sm:flex-col-reverse max-sm:items-start">
            <div className="w-56 mr-12 shadow-lg rounded-lg overflow-hidden max-sm:my-o max-sm:mx-auto">
                <img
                    className="w-full h-full object-cover object-center"
                    src={imageUrl}
                    alt={`${name}'s Profile Picture`}
                />
            </div>
            <h1 className="text-5xl font-bold max-sm:mb-6 max-sm:text-3xl">
                {name}
            </h1>
        </div>
    );
};

export default ContactHeader;
