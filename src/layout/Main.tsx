import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { FlightWidgetPage, TicTacToePage } from "../pages";
import Header from "./Header";

const Main = () => {
    const widgets = {
        flight: <FlightWidgetPage />,
        ticTacToe: <TicTacToePage />
    };

    const { widget } = useParams();

    return (
        <div className='h-full flex flex-col'>
            <Header />
            <div className='h-full flex flex-col justify-center items-center '>
                {widgets[widget as keyof typeof widgets]}
            </div>
        </div>
    );
};

export default Main;
