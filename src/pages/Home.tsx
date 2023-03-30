import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const widgets = [
        { url: "flight", label: "Flight Widget" },
        { url: "ticTacToe", label: "Tic Tac Toe" }
    ];

    return (
        <div className='w-full h-full p-20 flex gap-20 '>
            {widgets.map((widget) => (
                <div className='w-96 h-96 hover:scale-110'>
                    <Link
                        to={widget.url}
                        key={`widget_${widget.url}`}>
                        <div className='w-full h-full bg-sky-700 rounded-lg shadow-md flex items-center justify-center'>
                            <span className='text-5xl text-white'>
                                {widget.label}
                            </span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
