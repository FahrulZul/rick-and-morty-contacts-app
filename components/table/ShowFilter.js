import React from "react";

const ShowFilter = ({ pageSize, setPageSize, tableData }) => {
    return (
        <div>
            <label className="mr-2">Show:</label>
            <select
                className="border-2 border-neutral-200 w-fit rounded-lg px-4 py-2 focus:border-neutral-200 appearance-none"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
            >
                {tableData.length > 10 ? (
                    [10, 20].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))
                ) : (
                    <option key={10} value={10}>
                        {10}
                    </option>
                )}
            </select>
        </div>
    );
};

export default ShowFilter;
