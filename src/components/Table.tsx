import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
    return (
        <table className='text-left bg-neutral-800'>
            <TableHead />
            <TableBody />
        </table>
    );
};

export default Table;
