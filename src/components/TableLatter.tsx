import React, { FC, useState } from "react";

interface TableLatterProps {
    latter: string;
    index: number;
}

const TableLatter: FC<TableLatterProps> = ({ latter, index }) => {
    const [flip, setFlip] = useState(false);

    setTimeout(() => {
        setFlip(true);
    }, 100 * index);

    return (
        <div
            className={`border-sky-900 border-[3px] float-left ${
                flip ? "animate-flip" : ""
            }`}>
            {flip ? latter : null}
        </div>
    );
};

export default TableLatter;
