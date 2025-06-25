import React from "react";

const Banner = () => {
  return (
    <div className="flex max-w-[1200px] mx-auto bg-black text-white justify-between  relative">
      <div className="absolute top-3/4  -right-10 z-50 -translate-x-1/2 -translate-y-1/2    px-6 py-2 text-xl font-bold text-white opacity-70 pointer-events-none">
        <img 
      src="https://i.postimg.cc/fyqppQp3/UI-Designer-High-Quality-removebg-preview.png"
      alt="designer"
      className="h-[600px] w-[600px] object-contain"
    />
      </div>
      <div className="  w-1/2 ml-10 h-[500px] flex flex-col justify-center">
        <h1> Hello! This is </h1>
        <h2 className="font-bold text-4xl">
          joynal <span className="text-rose-700 ">abedin</span>
        </h2>
        <h2 className="mt-4">I am a web developer</h2>
        <div className=" h-16 w-[300px] mt-4 rounded-full shadow-inner shadow-rose-700 flex justify-end items-center">
          <h2 className="   w-max  h-max mr-3 py-2 px-9 bg-rose-700 rounded-full hover:bg-transparent hover:border-rose-700 hover:border border-rose-600 duration-300 font-bold text-xl">
            hire me
          </h2>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img
          className="h-[400px] absolute bottom-10 right-30"
          src="https://t4.ftcdn.net/jpg/04/82/74/87/240_F_482748735_VH9FCt5GPsh20RVEvIaAbGo0ZFafxBVk.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
