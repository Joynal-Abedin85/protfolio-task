import React from 'react';

const Blog = () =>  {
  return (
    <div className="w-full  bg-gray-900/70 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

        <div className="w-full shadow-xl  shadow-rose-950/60 md:w-1/2 relative h-[600px] bg-black rounded-xl overflow-hidden">
          <img
            src="https://www.templatetrip.com/wp-content/uploads/2018/06/Graphic-Design-Blogs-to-follow-in-2018.webp"
            alt="Main Blog"
            className="h-full w-[70%] object-cover"
          />

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[60%] h-[70%] bg-rose-900/50 backdrop-blur-2xl p-6 rounded-xl flex flex-col justify-between shadow-lg">
            <h2 className="text-2xl font-bold">Main Blog Title</h2>
            <p className="text-sm text-white/90">This featured blog explores the principles of modern UI/UX design, emphasizing user-centered thinking, clean visual hierarchy, and intuitive interaction. Dive into practical insights and creative strategies that help transform ordinary interfaces into delightful user experiences with lasting impact.</p>
            <button className="self-start mt-4 bg-black/80 text-white px-4 py-2 rounded hover:bg-black transition">Show More</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-between">
          
          <div className="flex shadow-xl bg-black shadow-rose-950/60 rounded-xl overflow-hidden h-[290px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQri-u_gDX5ISLWzZgWtMFeWpMmYCMvaHO9nROsKb5F7vmrUiymtcec7Vba714cBlmtrws&usqp=CAU"
              alt="Blog 1"
              className="w-[40%] object-cover"
            />
            <div className="p-4 w-[60%] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Blog Post One</h3>
                <p className="text-sm text-gray-300 mt-2">        Understand how color influences user emotions, behaviors, and decisions. This blog covers psychological theories behind color choices and how they can be effectively applied to improve usability and engagement.

                </p>
              </div>
              <button className="mt-4 self-start bg-rose-600 px-4 py-2 rounded hover:bg-rose-700 transition">Show More</button>
            </div>
          </div>

          <div className="flex  shadow-xl bg-black shadow-rose-950/60 rounded-xl overflow-hidden h-[290px]">
            <img
              src="https://designsvalley.com/wp-content/uploads/2023/03/benefits-of-tools-for-graphics9.jpg"
              alt="Blog 2"
              className="w-[40%] object-cover"
            />
            <div className="p-4 w-[60%] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Blog Post Two</h3>
                <p className="text-sm text-gray-300 mt-2">
                          Discover how scalable design systems streamline UI development across teams. Learn to build reusable components and maintain consistent styles that save time and enhance collaboration throughout large-scale projects.
                </p>
              </div>
              <button className="mt-4 self-start bg-rose-600 px-4 py-2 rounded hover:bg-rose-700 transition">Show More</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Blog;