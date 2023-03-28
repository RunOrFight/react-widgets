import React, { FC } from "react";
import { Arrival } from "../types";
import Table from "./Table";

interface DepartureTableProps {
    arrivals: Arrival[];
}

const ArrivalTable: FC<DepartureTableProps> = ({ arrivals }) => {
    const cols = [
        "",
        "AIRLINE",
        "FLIGHT",
        "FROM",
        "TIME",
        "Terminal",
        "Bagage Belt",
        "Status"
    ];
    const rows = arrivals?.map((departure) => {
        const { movement, number, status, airline } = departure;
        const regex = /(\d{2}:\d{2})/;

        return [
            airline.name,
            number.replace(" ", ""),
            movement.airport.name,
            movement.scheduledTimeLocal.match(regex)![0],
            movement.terminal,
            movement.baggageBelt,
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

export default ArrivalTable;
