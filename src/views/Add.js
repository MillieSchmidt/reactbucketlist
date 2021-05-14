import React, { useState } from 'react';

const Add = ({ onAdd }) => {
    const [title, setItem] = useState('');
    const [deadline, setDate] = useState('');
    const [id, setId] = useState(3);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert("Please add an item");
            return;
        } else if (!deadline) {
            alert("Pick a deadline! Don't go easy on yourself!");
            return;
        }

        onAdd({ title, deadline, id });

        setItem('');
        setDate('');
        setId(id + 1);
    }

    return (
        <div className="p-2">
            
            <div className="rounded-t bg-purple-600 text-center p-1 border-b-2 border-black">
                <h1 className="text-xl text-white">Add a Bucket List Item</h1>
            </div>
            <form className="rounded-b bg-gray-50 flex flex-col items-center p-2" onSubmit={onSubmit}>
                <label className="text-center">What excites you?</label>
                <input type="text" placeholder="Add item..." className="border pl-1 m-1 w-full" value={title} onChange={(e) => setItem(e.target.value)} />
                <input type="date" className="border m-1 text-center w-10/12" value={deadline} onChange={(e) => setDate(e.target.value)} />
                <input type="date" className="border m-1 text-center w-10/12" value={id} readOnly hidden />
                <input type="submit" value="Add Item" className="bg-blue-500 w-full rounded border p-1 mt-3 text-white text-center hover:bg-purple-600 hover:text-white" />
            </form>
            
        </div>
    )
}

export default Add;