import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

const GlobalFilter = ({ filter, setFilter, searchFor }) => {
    const onChangeHandler = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="border-2 border-neutral-200 flex items-center rounded-lg overflow-hidden max-sm:mb-4">
            <span className="bg-white px-2">
                <MagnifyingGlass size={20} />
            </span>
            <input
                type="text"
                placeholder={`Search ${searchFor} `}
                className=" focus:outline-none py-2 px-2"
                value={filter || ""}
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default GlobalFilter;
