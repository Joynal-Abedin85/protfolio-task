import React from 'react';

const Navbar = () => {
    return (
        <div className="pt-5">
            <div className='flex px-5 py-3  justify-between text-white max-w-[1000px] mx-auto 
    bg-rose-600/20 backdrop-blur-lg rounded-full  shadow-lg'>
            <h1 className='font-bold text-2xl '>Joynal.<span className='text-rose-500'>designer</span> </h1>
            <ul className='flex  space-x-6 '>
                <li>home</li>
                <li>service</li>
                <li>contect</li>
            </ul>
            <h2></h2>
        </div>
        </div>
    );
};

export default Navbar;