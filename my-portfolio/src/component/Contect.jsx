import React, { useRef } from "react";
import { FiSend, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';


const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs
  .sendForm(
    "service_20mnbm5",
    "template_tk9kt85",
    form.current,
    "Kej7605Cj65UK_F_D"
  )
  .then(
    (result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thanks for reaching out. I will get back to you soon.',
        confirmButtonColor: '#e11d48' 
      });
      form.current.reset();
    },
    (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#e11d48'
      });
    }
  );

  };

  return (
    <div className="text-white relative max-w-[1200px] mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
      <p className="text-gray-400 mb-8">
        Have a project in mind or just want to connect? Feel free to reach out!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            name="user_email"
            placeholder="Enter a valid email address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          placeholder="Write your message"
          rows="4"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full md:w-auto px-12 py-3 bg-rose-500 hover:bg-rose-700 text-white font-semibold rounded-full transition duration-300"
        >
          SUBMIT
        </button>
      </form>

      <div className="mt-16 bg-gray-700 py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center text-center space-y-2 max-w-sm">
          <div className="bg-rose-500 p-4 rounded-full text-white text-2xl">
            <FiSend />
          </div>
          <h3 className="font-bold text-lg">SERVICES</h3>
          <p className="text-gray-200 text-sm">
            UI/UX Design, Web Design, Responsive Interfaces
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2 max-w-sm">
          <div className="bg-rose-500 p-4 rounded-full text-white text-2xl">
            <FiPhone />
          </div>
          <h3 className="font-bold text-lg">PHONE</h3>
          <p className="text-gray-200 text-sm">+880 1643676513</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2 max-w-sm">
          <div className="bg-rose-500 p-4 rounded-full text-white text-2xl">
            <FiMapPin />
          </div>
          <h3 className="font-bold text-lg">LOCATION</h3>
          <p className="text-gray-200 text-sm">
            Dhaka, Bangladesh
            <br />
            Available for remote work worldwide.
          </p>
        </div>
      </div>

      <div className="absolute -top-60 left-1/2 transform -translate-x-1/2 w-[1200px] h-80 bg-rose-500/60 rounded-full blur-3xl opacity-40"></div>
    </div>
  );
};

export default Contect;