import React, { FC } from "react";

import { TableBody, TableHead } from ".";

interface TableProps {
    title: string;
    rows: string[][];
    cols: string[];
}

const Table: FC<TableProps> = ({ title, rows, cols }) => {
    return (
        <div className='flex flex-col items-center '>
            <header className='p-2.5'>{title}</header>
            <table className='text-left bg-neutral-800 rounded-lg shadow-xl p-2.5 block'>
                <TableHead cols={cols} />
                <TableBody rows={rows} />
            </table>
        </div>
    );
};

export default Table;
