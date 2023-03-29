import React, { FC } from "react";

import { TableBody, TableHead } from ".";

interface TableProps {
    rows: string[][];
    cols: string[];
}

const Table: FC<TableProps> = ({ rows, cols }) => {
    return (
        <table className='text-left bg-neutral-800 rounded-lg shadow-xl p-2.5 block w-fit rounded-tl-none'>
            <TableHead cols={cols} />
            <TableBody rows={rows} />
        </table>
    );
};

export default Table;
