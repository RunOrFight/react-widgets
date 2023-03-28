import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { Flight } from "../types";
import TableRow from "./TableRow";

const TIMEOUT = 1000;

const TableBody = () => {
    const [flights, setFlights] = useState<Flight[]>([]);

    const getFlights = () =>
        new Promise<Flight[]>((res) => {
            setTimeout(() => {
                res(data);
            }, TIMEOUT);
        }).then((data) => {
            setFlights(data);
        });

    useEffect(() => {
        getFlights();
    }, []);

    return (
        <tbody>
            {flights?.map((flight, index) => (
                <TableRow
                    key={`row_${index}`}
                    flight={flight}
                />
            ))}
        </tbody>
    );
};

export default TableBody;
