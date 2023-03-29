import React from "react";
import { Button } from "../components";

const Header = () => {
    return (
        <header className='bg-neutral-500 h-16 text-4xl flex justify-between font-mono py-2 px-4'>
            <div className='cursor-pointer'>←</div>
            <div className='cursor-pointer'>→</div>
        </header>
    );
};

export default Header;
