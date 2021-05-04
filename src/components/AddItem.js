import React from 'react';

const AddItem = ({ showAdd, showAddItem }) => {
    return (
        <div>
            <span className="cursor-pointer my-2 py-1 px-3 rounded border hover:bg-white hover:text-black" onClick={showAdd}>
                {showAddItem ? 'Close' : 'Add'}
            </span>
        </div>
    )
}

export default AddItem;
