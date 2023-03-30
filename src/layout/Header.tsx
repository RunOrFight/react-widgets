import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='bg-sky-700 text-white flex justify-between font-thin py-2 px-4'>
            <Link to='/react-widgets'>
                <span className='text-4xl hover:underline'>Back</span>
            </Link>
        </header>
    );
};

export default Header;
