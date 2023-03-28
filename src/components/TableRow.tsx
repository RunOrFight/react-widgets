import React, { FC } from "react";
import TableCell from "./TableCell";

interface TableRowProps {
    row: string[];
}

const TableRow: FC<TableRowProps> = ({ row }) => {
    return (
        <tr>
            <td className='text-center'>✈</td>
            {row?.map((cell, index) => (
                <TableCell
                    key={`cell_${index}`}
                    cell={cell}
                />
            ))}
        </tr>
    );
};

export default TableRow;
