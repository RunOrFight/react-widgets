import React, { FC } from "react";
import { Departure } from "../types";
import Table from "./Table";

interface DepartureTableProps {
    departures: Departure[];
}

const DepartureTable: FC<DepartureTableProps> = ({ departures }) => {
    const cols = [
        "",
        "Airline",
        "FLIGHT",
        "Destination",
        "Time",
        "Terminal",
        "Gate",
        "Status"
    ];
    const rows = departures?.map((departure) => {
        const { movement, number, status, airline } = departure;
        const regex = /(\d{2}:\d{2})/;

        return [
            airline.name,
            number.replace(" ", ""),
            movement.airport.name,
            movement.scheduledTimeLocal.match(regex)![0],
            movement.terminal,
            movement.gate,
            status
        ];
    });
    return (
        <Table
            cols={cols}
            rows={rows}
        />
    );
};

export default DepartureTable;
