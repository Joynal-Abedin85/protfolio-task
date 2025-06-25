import React from 'react';
import Banner from '../component/Banner';
import Navbar from '../component/Navbar';
import Experience from '../component/Experience';
import Project from '../component/Project';

const Home = () => {
    return (
        <div className='bg-black'>
            <Navbar ></Navbar>
            <Banner></Banner>
            <Experience></Experience>
            <Project></Project>
        </div>
    );
};

export default Home;