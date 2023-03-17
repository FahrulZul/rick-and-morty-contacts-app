import React from "react";
import Table from "@/components/table/Table";
import { contactColumns } from "@/components/table/columns";

const ContactList = ({ contactList }) => {
    return (
        <>
            <h1 className="text-4xl font-bold text-neutral-800 py-16 max-sm:text-3xl max-sm:py-10">
                Contacts
            </h1>
            <div className="mb-20">
                <Table
                    tableTitle="Contacts"
                    tableData={contactList}
                    tableColumns={contactColumns}
                    clickable={true}
                />
            </div>
        </>
    );
};

export default ContactList;
