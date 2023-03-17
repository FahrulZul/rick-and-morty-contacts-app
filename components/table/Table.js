import { useMemo } from "react";
import { useRouter } from "next/router";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";
import Pagination from "./Pagination";
import ShowFilter from "./ShowFilter";

const Table = ({ tableTitle, tableData, tableColumns, clickable = false }) => {
    const router = useRouter();
    const columns = useMemo(() => tableColumns, []);
    const data = useMemo(() => tableData, []);
    const defaultColumn = useMemo(() => ({
        disableGlobalFilter: true,
    }));

    const tableInstance = useTable(
        { columns, data, defaultColumn },
        useGlobalFilter,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        pageSize,
        setPageSize,
        gotoPage,
        state,
        setGlobalFilter,
    } = tableInstance;

    const { globalFilter, pageIndex } = state;

    return (
        <div>
            <div className="flex justify-between items-center mb-6 max-sm:flex-col max-sm:items-start">
                <GlobalFilter
                    searchFor={tableTitle}
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                />
                <ShowFilter
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    tableData={tableData}
                />
            </div>

            <div className="mb-8">
                <table className="table table-auto w-full" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr
                                className="bg-neutral-100"
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column) => (
                                    <th
                                        className="py-5 font-bold text-neutral-600 first-of-type:rounded-l-xl last-of-type:rounded-r-xl text-left px-8 max-sm:px-2"
                                        {...column.getHeaderProps()}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr
                                    className={`hover:bg-neutral-50 transition ease-in-out duration-300 ${
                                        clickable ? "cursor-pointer" : ""
                                    }`}
                                    {...row.getRowProps()}
                                    onClick={() => {
                                        clickable
                                            ? router.push(
                                                  `/contact/${row.original.id}`
                                              )
                                            : {};
                                    }}
                                >
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                className="py-5 first-of-type:rounded-l-xl last-of-type:rounded-r-xl pl-8 max-sm:px-2"
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <Pagination
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                pageCount={pageCount}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
            />
        </div>
    );
};

export default Table;
