import React from 'react';
import BucketListItem from './BucketListItem';

const BucketList = ({ items, onDelete }) => {
    return (
        <div className="px-4 bg-white min-h-screen">
            {items.map((item) => (
                <BucketListItem key={item.id} item={item} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default BucketList;
