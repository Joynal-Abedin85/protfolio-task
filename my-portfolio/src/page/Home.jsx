import React from 'react';
import Banner from '../component/Banner';
import Navbar from '../component/Navbar';
import Experience from '../component/Experience';

const Home = () => {
    return (
        <div className='bg-black'>
            <Navbar ></Navbar>
            <Banner></Banner>
            <Experience></Experience>
        </div>
    );
};

export default Home;