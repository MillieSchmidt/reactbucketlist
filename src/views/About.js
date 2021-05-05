import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="min-h-screen">
            <div className="text-4xl text-center bg-white py-3 mt-1">
                <h1 className="">About Us</h1>
            </div>
            <div className="flex items-center flex-col p-3 bg-gray-200 mx-5 rounded text-center">
                <h3 className="text-lg font-bold m-3">Bucket lists are important!</h3>
                <p className="w-full">This is why it's important that you'll have a simple, easy to use app, for keeping all
                    of your goals. We decided to create this app just for fun, and we hope it'll help you fulfill your dreams.
                </p>
                <p className="w-full">This app is currently experimental and was made just for fun and for react-learning purposes. 
                    It might still have a few bugs, so don't judge it too harshly. It's just my own fun project.
                </p>
                <Link exact to="/" className="cursor-pointer underline my-2 py-1 px-3 rounded hover:no-underline hover:text-black mt-5">
                    Back to list
                </Link>
            </div>
        </div>
    );
}

export default About;