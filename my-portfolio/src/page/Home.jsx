import React from 'react';
import Banner from '../component/Banner';
import Experience from '../component/Experience';
import Project from '../component/Project';
import AboutMe from '../component/AboutMe';
import Blog from '../component/Blog';

const Home = () => {
    return (
        <div className='bg-black'>
            <Banner></Banner>
            <Experience></Experience>
            <Project></Project>
            <AboutMe></AboutMe>
            <Blog></Blog>
        </div>
    );
};

export default Home;