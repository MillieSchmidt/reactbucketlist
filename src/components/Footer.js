import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-red-600 text-white text-center text-sm p-3 absolute bottom-0 w-full">
            &copy; Copyright 2021 <br />

            <Link to="/about" className="underline hover:text-white hover:no-underline">
                About
            </Link>
        </footer>
    );
}

export default Footer;