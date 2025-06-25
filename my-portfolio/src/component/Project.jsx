import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Project = () => {
  return (
<div  id="service" className="w-full py-16 bg-gradient-to-b from-gray-950 via-rose-950/70 to-black text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0}
        >
          <div className="md:w-[60%] space-y-4">
            <h2 className="text-3xl font-bold">Creative Design Project</h2>
            <p className="text-gray-300">A visually stunning graphic concept for a branding campaign.</p>
            <p className="text-sm text-rose-300">Tools used: Photoshop, Illustrator</p>
          </div>
          <div className="md:w-[40%] hover:scale-105 transition-transform duration-500">
            <img
              src="https://reallygooddesigns.com/wp-content/uploads/2024/11/creative-website-designs.jpg"
              alt="Creative Design"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={1}
        >
          <div className="md:w-[60%] space-y-4">
            <h2 className="text-3xl font-bold">UI/UX Design Project</h2>
            <p className="text-gray-300">An interactive and user-friendly mobile app interface.</p>
            <p className="text-sm text-rose-300">Tools used: Figma, Adobe XD</p>
          </div>
          <div className="md:w-[40%] hover:scale-105 transition-transform duration-500">
            <img
              src="https://i.postimg.cc/y8RMVWST/download.jpg"
              alt="UI/UX Design"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={2}
        >
          <div className="md:w-[60%] space-y-4">
            <h2 className="text-3xl font-bold">Web Design Project</h2>
            <p className="text-gray-300">A responsive and modern portfolio website built with React.</p>
            <p className="text-sm text-rose-300">Built with: React, Tailwind CSS</p>
          </div>
          <div className="md:w-[40%] hover:scale-105 transition-transform duration-500">
            <img
              src="https://i.postimg.cc/tCQfBpcZ/tech2.jpg"
              alt="Web Design"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

      </div>
    </div>
    
  );
};

export default Project;
