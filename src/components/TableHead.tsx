import React, { FC } from "react";

interface TableHeadProps {
    cols: string[];
}

const TableHead: FC<TableHeadProps> = ({ cols }) => {
    return (
        <thead>
            <tr>
                {cols.map((col, index) => (
                    <td
                        key={`col_${index}`}
                        className='px-4'>
                        {col.toUpperCase()}
                    </td>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
