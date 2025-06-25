import React from "react";

const Banner = () => {
  return (
    <div className="flex max-w-[1200px] mx-auto bg-black text-white justify-between  relative">
      <div className="absolute top-3/4  -right-40 z-0 -translate-x-1/2 -translate-y-1/2    px-6 py-2 text-xl font-bold text-white opacity-70 pointer-events-none">
        <img
          src="https://i.postimg.cc/fyqppQp3/UI-Designer-High-Quality-removebg-preview.png"
          alt="designer"
          className="h-[800px] opacity-50 w-[900px] object-contain"
        />
      </div>

        <div className="absolute top-2/5  -right-20 z-0 -translate-x-1/2 -translate-y-1/2  h-96 w-96 rounded-full   px-6 py-2 text-xl font-bold text-white opacity-50 pointer-events-none">
        <img src="https://i.pinimg.com/736x/af/e6/e4/afe6e40921adb4676b7867b9fa329fc3.jpg" alt="" />
        
      </div>

      <div className="  w-1/2 ml-40 h-[500px] flex flex-col justify-center">
        <h1> Hello! </h1>
        <h2 className="font-bold text-4xl">
          {" "}
          I'm
          <span className="text-rose-700 "> joynal abedin</span>
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
          className="h-[500px] absolute bottom-10 right-40"
          src="https://i.postimg.cc/qvGwrCGn/pic33-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
