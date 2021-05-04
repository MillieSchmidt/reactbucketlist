import React from 'react';
import { useLocation } from 'react-router-dom';
import AddItem from './AddItem';

function Header({ showAdd, showAddItem }) {
    const location = useLocation();

    return (
        <div>
            <header className="bg-red-600 border-b-2 border-red-700 p-3 flex justify-between items-center">
                <span className="text-white font-bold">
                    AppName
                </span>
            
                {location.pathname === '/' && <AddItem showAdd={showAdd} showAddItem={showAddItem} />}
            </header>
            {location.pathname === '/' && <h1 className="text-4xl text-center bg-white py-3 mt-1">Your Bucket List</h1>}
        </div>
    );
}

export default Header;