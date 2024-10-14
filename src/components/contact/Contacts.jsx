import React from "react";
import background from "../../assets/bg-contact.png";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
  return (
    <div id="contact" className="relative overflow-hidden min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 sm:px-8 sm:py-12">
      {/* Background Image */}
      <div className="absolute h-full w-full z-0">
        <img
          src={background}
          alt="Wave Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 p-6 bg-black rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
        {/* Left Section - Text and Button */}
        <div className="text-white w-full sm:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Let’s Work Together
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            I am always open to exploring new opportunities, whether it’s for
            freelance work, long-term partnerships, or simply discussing
            innovative ideas. Don’t hesitate to get in touch if you’re
            interested in working together or have any questions. Looking
            forward to connecting with you!
          </p>
          <button className="bg-blue-800 text-white mt-22 sm:mt-44 px-6 py-3 rounded-lg hover:bg-blue-700">
            Download My Resume
          </button>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:example@example.com"
              className="text-white text-3xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full sm:w-1/2 p-6 rounded-lg shadow-lg">
          <form className="flex flex-col gap-4">
            <label className="text-white">Name</label>
            <input
              type="text"
              placeholder="Input Name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="text-white">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="text-white">Subject</label>
            <input
              type="text"
              placeholder="Input Subject"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="text-white">Message</label>
            <textarea
              placeholder="Write Something..."
              rows="4"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
