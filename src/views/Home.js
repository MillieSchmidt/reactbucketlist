import React from 'react';
import BucketList from '../components/BucketList';

function Home({ items, onDelete }) {
    let listItem;

    if (items.length > 0) {
        listItem = <div className="bg-white min-h-screen text-lg text-center">
                        <BucketList items={items} onDelete={onDelete} />
                    </div>;
    } else if (items.length === 0) {
        listItem = <div className="bg-white min-h-screen text-lg text-center">
                    Your list is still empty!
                  </div>
    } else if (items === false) {
        listItem = <div className="bg-white min-h-screen text-lg text-center font-bold text-purple-600">
                    Loading...
                  </div>
    }

    return (
        <div className="bg-white text-center">
            {listItem}
            {/* {items ? (<BucketList items={items} onDelete={onDelete} />) : 
                (<div className="p-5 bg-white min-h-screen text-lg text-center">
                    Your list is still empty!
                </div>)} */}
        </div>
    );
}

export default Home;