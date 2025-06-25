import React from 'react';
import { FaLaptopCode, FaPencilRuler, FaPaintBrush, FaArrowRight } from 'react-icons/fa';


const Experience = () => {
    return (

    <div className='bg-gray-950'>
        <div className='text-white max-w-[1200px]  mx-auto pb-14'>
        <div className='flex justify-between'>
            <img src="https://i.postimg.cc/kgnHvc46/Gemini-Generated-Image-jgfffhjgfffhjgff-removebg-preview.png" 
            className='h-50' alt="" />
            <img src="https://i.postimg.cc/vmSHsTjh/Gemini-Generated-Image-jgfffgjgfffgjgff-removebg-preview.png" 
            className='h-50' alt="" />
            <img src="https://i.postimg.cc/Xq9Vd8v1/Gemini-Generated-Image-jgfffkjgfffkjgff-removebg-preview.png" 
            className='h-50' alt="" />
            <img src="https://i.postimg.cc/RCtCkMT1/Gemini-Generated-Image-jgfffijgfffijgff-1-removebg-preview.png" 
            className='h-50' alt="" />
            <img src="https://i.postimg.cc/yYz6BwfM/Gemini-Generated-Image-jgfffjjgfffjjgff-removebg-preview.png" 
            className='h-50' alt="" />
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col justify-center items-center  w-1/3'>
                <h1 className='text-7xl font-bold text-rose-700'>7+</h1>
                <p className='font-bold text-xl'>years Experience</p>
            </div>
            <div className='w-3/5'>
                <h2 className='font-bold text-2xl'>I'm a designer & developer with a passion for web design</h2>
                <div className='flex justify-between mt-5'>
                    <div className=' w-52 p-3 bg-black rounded-xl flex flex-col justify-end h-40 pb-10 shadow-rose-950 shadow-lg hover:bg-rose-950 duration-300'>
                         <FaLaptopCode className='text-black bg-rose-600 p-2 h-8 w-8 rounded-full'/>
                        <p className='font-bold text-xl my-1.5'>Creative Design </p>
                        <div className='flex items-center '>
                            <h5>Explore More </h5>
                            <h2 className='ml-2 '><FaArrowRight></FaArrowRight></h2>
                        </div>
                    </div>
                    <div className=' w-52 p-3 bg-black rounded-xl flex flex-col justify-end h-40 pb-10 shadow-rose-950 shadow-lg hover:bg-rose-950 duration-300'>
                        <FaPencilRuler className='text-black bg-rose-600 p-2 h-8 w-8 rounded-full'/>
                        <p className='font-bold text-xl my-1.5'>UI/UX design </p>
                        <div className='flex items-center '>
                            <h5>Explore More </h5>
                            <h2 className='ml-2 '><FaArrowRight></FaArrowRight></h2>
                        </div>
                    </div>
                    <div className=' w-52 p-3 bg-black rounded-xl flex flex-col justify-end h-40 pb-10 shadow-rose-950 shadow-lg hover:bg-rose-950 duration-300'>
                        <FaPaintBrush className='text-black bg-rose-600 p-2 h-8 w-8 rounded-full'/>
                        <p className='font-bold text-xl my-1.5'>Web design</p>
                        <div className='flex items-center '>
                            <h5>Explore More </h5>
                            <h2 className='ml-2 '><FaArrowRight></FaArrowRight></h2>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Experience;