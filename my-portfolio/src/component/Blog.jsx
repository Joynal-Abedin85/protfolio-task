import React, { useState } from 'react';

const Blog = () => {
  const [activeModal, setActiveModal] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Main Blog Title",
      preview: "Learn the core principles of UI/UX design, focusing on user-centered layouts, consistent hierarchy, and minimal interfaces for delightful user experiences.",
      full: `Learn the core principles of UI/UX design that help shape world-class digital products. A user-centered layout ensures that design decisions are driven by actual needs and pain points. Consistency in typography, spacing, and colors improves both usability and branding. Minimal interfaces that reduce cognitive load can lead to smoother task flows. This blog explores real-world examples and strategies that help craft experiences users remember and return to.`,
      image: "https://www.templatetrip.com/wp-content/uploads/2018/06/Graphic-Design-Blogs-to-follow-in-2018.webp",
    },
    {
      id: 2,
      title: "Blog Post One",
      preview: "Explore how color psychology influences user decisions and engagement in UI design, making interfaces more intuitive and effective.",
      full: `Color psychology plays a vital role in UI/UX design. It influences users’ first impressions, emotions, and decision-making. For instance, blue signifies trust, often used in fintech apps, while red implies urgency. Choosing the right color palette can enhance usability, attract the target audience, and improve accessibility. This blog guides designers to use color theory to their advantage while avoiding overwhelming visuals or contrast issues.`,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQri-u_gDX5ISLWzZgWtMFeWpMmYCMvaHO9nROsKb5F7vmrUiymtcec7Vba714cBlmtrws&usqp=CAU",
    },
    {
      id: 3,
      title: "Blog Post Two",
      preview: "Understand how design systems improve collaboration and scalability in UI teams, making large-scale projects easier to manage.",
      full: `Design systems are a collection of reusable components, guidelines, and standards that help teams build products faster and more consistently. They enhance collaboration between designers and developers and reduce redundant work. From typography and spacing to buttons and forms, a solid design system streamlines development and boosts scalability. This blog dives deep into how to build, implement, and maintain efficient systems for startups and enterprises alike.`,
      image: "https://designsvalley.com/wp-content/uploads/2023/03/benefits-of-tools-for-graphics9.jpg",
    },
  ];

  return (
    <div className="w-full bg-gray-900/70 text-white py-16 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full shadow-xl shadow-rose-950/60 md:w-1/2 relative h-[600px] bg-black rounded-xl overflow-hidden">
          <img
            src={blogs[0].image}
            alt="Main Blog"
            className="h-full w-[70%] object-cover"
          />

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[60%] h-[70%] bg-rose-900/50 backdrop-blur-2xl p-6 rounded-xl flex flex-col justify-between shadow-lg">
            <h2 className="text-2xl font-bold">{blogs[0].title}</h2>
            <p className="text-sm text-white/90">{blogs[0].preview}</p>
            <button
              onClick={() => setActiveModal(1)}
              className="self-start mt-4 bg-black/80 border-black text-white px-4 py-2 rounded hover:bg-gray-900 hover:border hover:border-rose-600 duration-300 transition"
            >
              Show More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-between">
          {[blogs[1], blogs[2]].map((blog) => (
            <div
              key={blog.id}
              className="flex shadow-xl bg-black shadow-rose-950/60 rounded-xl overflow-hidden h-[290px]"
            >
              <img src={blog.image} alt={blog.title} className="w-[40%] object-cover" />
              <div className="p-4 w-[60%] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{blog.preview}</p>
                </div>
                <button
                  onClick={() => setActiveModal(blog.id)}
                  className="mt-4 self-start bg-rose-600 px-4 py-2 rounded hover:bg-rose-700 transition"
                >
                  Show More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-rose-200/90 text-black w-[300px] h-[400px] rounded-lg shadow-lg p-6 relative overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-red-500 font-bold text-xl"
              onClick={() => setActiveModal(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-3">{blogs.find(b => b.id === activeModal).title}</h2>
            <p className="text-sm leading-relaxed">{blogs.find(b => b.id === activeModal).full}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
