import React from "react";
import Table from "@/components/table/Table";
import { episodeColumns } from "@/components/table/columns";

const ContactEpisode = ({ episodes }) => {
    return (
        <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Episodes</h2>
            <Table
                tableTitle="Episodes"
                tableData={episodes}
                tableColumns={episodeColumns}
            />
        </div>
    );
};

export default ContactEpisode;
