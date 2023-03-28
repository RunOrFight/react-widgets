import React from "react";

const TableHead = () => {
    const columnsHeads = [
        "",
        "time",
        "destination",
        "flight",
        "gate",
        "remarks"
    ];
    return (
        <thead>
            <tr>
                {columnsHeads.map((columnHead, index) => (
                    <td
                        key={`columnhead_${index}`}
                        className='px-4'>
                        {columnHead.toUpperCase()}
                    </td>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
