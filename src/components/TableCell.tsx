import React, { FC, useState } from "react";
import TableLatter from "./TableLatter";

interface TableCellProps {
    flightValue: string;
}

const TableCell: FC<TableCellProps> = ({ flightValue }) => {
    return (
        <td className='px-4'>
            {Array.from(flightValue).map((latter, index) => (
                <TableLatter
                    key={`latter_${index}`}
                    latter={latter}
                    index={index}
                />
            ))}
        </td>
    );
};

export default TableCell;
