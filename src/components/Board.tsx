import React, { FC, HTMLAttributes, PropsWithChildren, useState } from "react";

interface SquareProps extends HTMLAttributes<HTMLDivElement> {}

const Square: FC<SquareProps> = ({ children, ...props }) => {
    return (
        <div
            className='w-1/3 h-full text-2xl flex items-center justify-center text-white border-white border-2'
            {...props}>
            {children}
        </div>
    );
};

interface BoardRowProps extends PropsWithChildren {}

const BoardRow: FC<BoardRowProps> = ({ children }) => {
    return <div className='h-1/3 w-full flex'>{children}</div>;
};

const horizontalWinnigPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

const vericalWinnigPatterns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

const diagonalWinnigPatterns = [
    [0, 4, 8],
    [2, 4, 6]
];

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isX, setIsX] = useState(true);

    const handleClick = (i: number) => {
        squares[i] = isX ? "X" : "O";
        setSquares(squares);
        setIsX(!isX);
    };

    return (
        <div className='w-full h-full p-20'>
            <BoardRow>
                <Square onClick={() => handleClick(2)}>{squares[2]}</Square>
                <Square onClick={() => handleClick(1)}>{squares[1]}</Square>
                <Square onClick={() => handleClick(2)}>{squares[2]}</Square>
            </BoardRow>
            <BoardRow>
                <Square onClick={() => handleClick(3)}>{squares[3]}</Square>
                <Square onClick={() => handleClick(4)}>{squares[4]}</Square>
                <Square onClick={() => handleClick(5)}>{squares[5]}</Square>
            </BoardRow>
            <BoardRow>
                <Square onClick={() => handleClick(6)}>{squares[6]}</Square>
                <Square onClick={() => handleClick(7)}>{squares[7]}</Square>
                <Square onClick={() => handleClick(8)}>{squares[8]}</Square>
            </BoardRow>
        </div>
    );
};

export default Board;
