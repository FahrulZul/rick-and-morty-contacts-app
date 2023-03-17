export const contactColumns = [
    {
        Header: "Name",
        accessor: "name",
        disableGlobalFilter: false,
        Cell: (tableProps) => (
            <div className="flex items-center max-sm:flex-col max-sm:items-start">
                <img
                    className="rounded-lg w-12 h-12 mr-3 shadow max-sm:hidden"
                    src={tableProps.row.original.image}
                />
                <span className="inline-block">
                    {tableProps.row.original.name}
                </span>
            </div>
        ),
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Species",
        accessor: "species",
    },
    {
        Header: "Gender",
        accessor: "gender",
    },
];

export const episodeColumns = [
    {
        Header: "Name",
        accessor: "name",
        disableGlobalFilter: false,
    },
    {
        Header: "Air Date",
        accessor: "airDate",
    },
    {
        Header: "Episode",
        accessor: "episode",
    },
];
