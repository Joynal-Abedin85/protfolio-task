import React from 'react';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div className='bg-black'>
                <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;