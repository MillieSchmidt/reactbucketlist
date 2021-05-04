import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    let menu;
    let menuMask;

    if (showMenu) {
        menu = <div className="fixed bg-gray-100 top-0 left-0 w-1/5 h-full z-50 shadow">
                    <h1 className="font-bold p-3 border-b">AppName</h1>
                    <ul>
                        <li className="p-3 border-b">
                            <Link to="/" className="text-blue-500" onClick={() => setShowMenu(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="p-3 border-b">
                            <Link to="/add-item" className="text-blue-500" onClick={() => setShowMenu(false)}>
                                Add
                            </Link>
                        </li>
                        <li className="p-3 border-b">
                            <Link to="/about" className="text-blue-500" onClick={() => setShowMenu(false)}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

        menuMask = <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                    onClick={() => setShowMenu(false)}></div>
    }

    return (
        <nav>
            <span className="cursor-pointer bg-blue-300 my-2 py-1 px-3 rounded border" onClick={() => setShowMenu(!showMenu)}>
                Menu
            </span>
            {menuMask}
            {menu}
        </nav>
    );
}

export default Navigation;