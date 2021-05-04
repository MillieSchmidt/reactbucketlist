import React from 'react';
import { FaTimes } from 'react-icons/fa';

const BucketListItem = ({ item, onDelete }) => {
    return (        
        <ul className="flex">                
            <li className="w-full bg-purple-600 p-3 m-2 rounded shadow flex justify-between">
                <div className="flex flex-col">
                    <span className="text-md text-left">
                        
                            {item.title}
                        
                    </span>
                    <span className="text-left text-sm text-blue-200">{item.deadline}</span>
                </div>
                <span className="self-center mt-2 delete">
                    <FaTimes style={{ cursor: 'pointer' }} onClick={() => onDelete(item.id)} />
                </span>
            </li>
        </ul>
    )
}

export default BucketListItem;
