import React from 'react';
import { FaChartPie, FaLightbulb, FaMobileAlt, FaPalette, FaRocket, FaShieldAlt, FaUser, FaUserAlt, FaUsers } from 'react-icons/fa';

const Service = () =>   {
  return (
    <div className="bg-black max-w-[1200px] mx-auto text-white px-6 py-12 space-y-24">
      
      <section>
        <h2 className="text-4xl font-bold text-rose-400 mb-10 text-center uppercase tracking-wide">UI/UX Strategy</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="bg-rose-950 p-6 rounded-xl shadow-xl hover:scale-105 transition">
            <FaUserAlt className="text-rose-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">User Research</h3>
            <p className="text-gray-400">Understand your users through surveys, interviews, and analytics.</p>
          </div>
          <div className="bg-rose-950 p-6 rounded-xl shadow-xl hover:scale-105 transition">
            <FaChartPie className="text-rose-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Competitor Analysis</h3>
            <p className="text-gray-400">Study the market to design better experiences than your competitors.</p>
          </div>
          <div className="bg-rose-950 p-6 rounded-xl shadow-xl hover:scale-105 transition">
            <FaUsers className="text-rose-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Persona Development</h3>
            <p className="text-gray-400">Craft personas to align business goals with user needs.</p>
          </div>
        </div>
      </section>

      <section>
  <h2 className="text-4xl font-bold text-rose-400 mb-10 text-center uppercase tracking-wide">UI Design</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
    <div className="bg-rose-900/30 shadow-red-800/30 p-4 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
      <img
        src="https://i.postimg.cc/dVFgp1kZ/download-1.png"
        alt="Wireframing"
        className="rounded-md mb-4 w-full h-48 object-cover object-center"
      />
      <h3 className="text-xl font-semibold mb-2">Wireframing</h3>
      <p className="text-gray-300">Initial low-fidelity visual planning of layouts and components.</p>
    </div>

    <div className="bg-rose-900/30 shadow-red-800/30 p-4 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
      <img
        src="https://i.postimg.cc/g0kQcTKY/download-1.jpg"
        alt="Mockups"
        className="rounded-md mb-4 w-full h-48 object-cover object-center"
      />
      <h3 className="text-xl font-semibold mb-2">High-Fidelity Mockups</h3>
      <p className="text-gray-300">Polished and detailed screen designs for development handoff.</p>
    </div>

    <div className="bg-rose-900/30 shadow-red-800/30 p-4 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
      <img
        src="https://i.postimg.cc/Yq6s6Hnr/download-3.jpg"
        alt="Design System"
        className="rounded-md mb-4 w-full h-48 object-cover object-center"
      />
      <h3 className="text-xl font-semibold mb-2">Design System</h3>
      <p className="text-gray-300">Unified standards for components, typography, and spacing.</p>
    </div>

    <div className="bg-rose-900/30 shadow-red-800/30 p-4 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
      <img
        src="https://i.postimg.cc/rpnbDNh5/download-2.jpg"
        alt="Responsive Design"
        className="rounded-md mb-4 w-full h-48 object-cover object-center"
      />
      <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
      <p className="text-gray-300">Designs that adapt fluidly across all device sizes and screens.</p>
    </div>

    <div className="bg-rose-900/30 shadow-red-800/30 p-4 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
      <img
        src="https://i.postimg.cc/5t4y4bG6/download-2.png"
        alt="Typography"
        className="rounded-md mb-4 w-full h-48 object-cover object-center"
      />
      <h3 className="text-xl font-semibold mb-2">Typography</h3>
      <p className="text-gray-300">Careful selection and use of fonts to enhance readability and style.</p>
    </div>

    <div className="bg-rose-900/30 shadow-red-800/30 p-4 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
      <img
        src="https://i.postimg.cc/Bbrt4D90/images-1.jpg"
        alt="Color Theory"
        className="rounded-md mb-4 w-full h-48 object-cover object-center"
      />
      <h3 className="text-xl font-semibold mb-2">Color Theory</h3>
      <p className="text-gray-300">Use of color to evoke emotions and improve the overall design harmony.</p>
    </div>
  </div>
</section>



      

       <section className="bg-black text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-rose-400 mb-12 text-center uppercase tracking-wide">Why Choose Us</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        <div className="bg-rose-800/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
          <FaLightbulb className="text-rose-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Innovative Solutions</h3>
          <p className="text-gray-300">We craft cutting-edge UI/UX designs that set your brand apart and engage users effectively.</p>
        </div>

        <div className="bg-rose-800/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
          <FaUser className="text-rose-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">User-Centered Design</h3>
          <p className="text-gray-300">Our process focuses on user needs, ensuring intuitive and accessible experiences for everyone.</p>
        </div>

        <div className="bg-rose-800/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
          <FaRocket className="text-rose-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-300">We deliver high-quality UI/UX projects on time without compromising on creativity or detail.</p>
        </div>

        <div className="bg-rose-800/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
          <FaMobileAlt className="text-rose-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-300">Our designs look great and work seamlessly across all devices and screen sizes.</p>
        </div>

        <div className="bg-rose-800/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
          <FaPalette className="text-rose-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Creative Aesthetics</h3>
          <p className="text-gray-300">We balance function and beauty to create visually stunning and practical user interfaces.</p>
        </div>

        <div className="bg-rose-800/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
          <FaShieldAlt className="text-rose-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Reliable Support</h3>
          <p className="text-gray-300">Our team offers continuous support and maintenance to ensure your UI/UX stays top-notch.</p>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Service;