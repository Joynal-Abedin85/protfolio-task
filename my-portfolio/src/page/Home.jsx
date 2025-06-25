import React from 'react';
import Banner from '../component/Banner';
import Navbar from '../component/Navbar';
import Experience from '../component/Experience';
import Project from '../component/Project';
import AboutMe from '../component/AboutMe';
import Blog from '../component/Blog';
import Contect from '../component/Contect';

const Home = () => {
    return (
        <div className='bg-black'>
            <Navbar ></Navbar>
            <Banner></Banner>
            <Experience></Experience>
            <Project></Project>
            <AboutMe></AboutMe>
            <Blog></Blog>
            <Contect></Contect>
        </div>
    );
};

export default Home;