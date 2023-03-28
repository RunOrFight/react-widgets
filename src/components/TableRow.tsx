import React, { FC } from "react";
import { Flight } from "../types";
import TableCell from "./TableCell";

interface TableRowProps {
    flight: Flight;
}

const TableRow: FC<TableRowProps> = ({ flight }) => {
    const flightValues = Object.values(flight);

    return (
        <tr>
            <td>✈</td>
            {flightValues?.map((flightValue, index) => (
                <TableCell
                    key={`cell_${index}`}
                    flightValue={flightValue}
                />
            ))}
        </tr>
    );
};

export default TableRow;
