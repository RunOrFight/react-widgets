import React, { FC } from "react";
import TableLatter from "./TableLatter";

interface TableCellProps {
    cell: string;
}

const TableCell: FC<TableCellProps> = ({ cell }) => {
    return (
        <td className='px-4'>
            {Array.from(cell || "").map((latter, index) => (
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
