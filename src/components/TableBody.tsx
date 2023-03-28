import React, { FC, useEffect, useState } from "react";
import TableRow from "./TableRow";

const TIMEOUT = 1000;

interface TableBodyProps {
    rows: string[][];
}

const TableBody: FC<TableBodyProps> = ({ rows }) => {
    return (
        <tbody>
            {rows?.map((row, index) => (
                <TableRow
                    key={`row_${index}`}
                    row={row}
                />
            ))}
        </tbody>
    );
};

export default TableBody;
