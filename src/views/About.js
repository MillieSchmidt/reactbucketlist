import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="min-h-screen flex-box">
            <div className="text-4xl text-center bg-white py-3 mt-1">
                <h1 className="mb-3">About Us</h1>
            </div>
            <div className="p-3 bg-gray-200 mx-5 rounded border-dashed">
                <p className="mb-2 text-sm tracking-widest">This app is currently experimental and was made just for fun and for react-learning purposes.</p>
                <p className="mb-2 text-sm tracking-widest">It only contains a frontend, which means its "data" is stored in a simple JS constant, which you can change by adding or deleting content.</p>
                <p className="mb-2 text-sm tracking-widest">I will add a backend eventually, but as my focus is on frontend and design I decided to upload the app as it is, for now.</p>
                <Link to="/list" className="cursor-pointer underline my-2 py-1 px-3 rounded hover:no-underline hover:text-black">
                    Back to list
                </Link>
            </div>
        </div>
    );
}

export default About;