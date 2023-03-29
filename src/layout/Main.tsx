import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;
