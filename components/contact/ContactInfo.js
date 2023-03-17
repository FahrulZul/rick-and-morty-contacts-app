import React from "react";
import Badge from "@/components/ui/Badge";

const ContactInfo = ({ gender, status, species, location, origin }) => {
    return (
        <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Personal info</h2>
            <div className="flex gap-4 flex-wrap">
                <Badge label="gender" value={gender} />
                <Badge label="status" value={status} />
                <Badge label="species" value={species} />
                <Badge label="location" value={location.name} />
                <Badge label="origin" value={origin.name} />
            </div>
        </div>
    );
};

export default ContactInfo;
