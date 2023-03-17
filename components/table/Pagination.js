import React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const Pagination = ({
    nextPage,
    previousPage,
    pageIndex,
    pageOptions,
    canNextPage,
    canPreviousPage,
    pageCount,
    gotoPage,
}) => {
    return (
        <div className="w-full flex justify-between items-center max-sm:flex-col">
            <span className="font-medium max-sm:mb-4">
                Page {pageIndex + 1} of {pageOptions.length}
            </span>
            <div className="flex gap-x-1">
                <button
                    className={`flex items-center hover:bg-neutral-100 py-2 pr-4 pl-2.5 rounded-lg ${
                        !canPreviousPage ? "text-neutral-400" : ""
                    }`}
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    <CaretLeft size={20} />
                    <span className="ml-2">Prev</span>
                </button>
                {Array.from({ length: pageCount }, (_, i) => (
                    <button
                        key={i + 1}
                        className={`hover:bg-neutral-100 w-10 h-10 rounded-lg max-sm:hidden ${
                            pageIndex == i ? "bg-neutral-100" : ""
                        }`}
                        onClick={() => gotoPage(i)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className={`flex items-center hover:bg-neutral-100 py-2 pl-4 pr-2.5 rounded-lg ${
                        !canNextPage ? "text-neutral-400" : ""
                    }`}
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    <span className="mr-2">Next</span>
                    <CaretRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
