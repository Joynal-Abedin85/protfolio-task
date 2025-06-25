import React from 'react';

const AboutMe = () =>  {
  return (
        <div id="home" className="w-full bg-gradient-to-b from-black via-black to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        
       
        <div className="relative w-full md:w-1/2 h-[400px] flex justify-center items-center">
          
          <img
            src="https://i.postimg.cc/HL0XCG4L/istockphoto-1262359234-612x612.jpg"
            alt="Top Left"
            className="absolute top-0 left-0 w-70 h-80 object-cover rounded-lg shadow-md z-10"
          />

         
          <img
            src="https://i.postimg.cc/BQdKLZm6/istockphoto-1074642140-612x612.jpg"
            alt="Bottom Right"
            className="absolute bottom-0 right-0 w-80 h-60 object-cover rounded-lg shadow-md z-10"
          />

          

          <div className="absolute top-5 right-6 p-3 flex flex-col items-center h-28 justify-center text-white font-bold bg-rose-700 rounded-full z-0">
            <h2 className='text-5xl'>1K+</h2>
            <h2 className='text-xl'>project</h2>
          </div>

          <div className="absolute bottom-5 right-36 w-12 h-12 bg-indigo-600 rounded-xl z-0"></div>
        </div>

        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-rose-400">UI/UX Designer</h2>
          <h2 className='text-2xl'>A Passionate Developer Who Loves to Code </h2>
          <p className="text-gray-300">
            I specialize in crafting beautiful and user-friendly interfaces. My designs are focused on usability,
            clean visuals, and strong branding principles that bring your product to life.
          </p>
          <a href='https://drive.google.com/file/d/18ZfN3YcJEAUD0sYrSD6rJLwPUx3QYodK/view?usp=sharing' target='_blank'>
          <button className="bg-rose-600 hover:bg-rose-700 transition-all px-6 py-2 rounded-md text-white font-semibold shadow-md">
            Download CV
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;