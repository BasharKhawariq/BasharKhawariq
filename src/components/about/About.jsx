import React from "react";
import object1 from "../../assets/object-1.png";
import object2 from "../../assets/object-2.png";
import object3 from "../../assets/object-3.png";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div id="about" className="relative h-screen w-screen flex flex-col md:flex-row bg-black">
      <img
        src={object2}
        alt="object2"
        className="absolute bottom-0 left-0 w-20 sm:w-28 md:w-36 lg:w-40 object-cover opacity-90"
      />
      <div className="w-screen mt-0 sm:mt-5 h-full flex flex-col justify-center items-center p-6 md:p-0">
        <div className="md:absolute md:left-0 md:top-32 ml-6 md:ml-10 lg:ml-16">
          <div className="w-full flex justify-start">
            {/* <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Hi, I'm
            </span> */}

            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc38e] to-[#C9C9C9] text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold">
              <span className="text-white font-normal text-3xl">Hello, I'm </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89ABCA] to-[#6F59A8] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Bashar Lentera Jihad Khawariq</span>
              <br />
              <span className="text-white font-normal text-3xl">I'm a </span>
              <TypeAnimation
              className=""
                sequence={[
                  "Software Enginner",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Photo / Video Grapher",
                  1000,
                  "Video Editor",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          {/* <div className="w-full">
            <span className="font-semibold text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#89ABCA] to-[#6F59A8]">
              Bashar Lentera Jihad Khawariq
            </span>
          </div> */}
          <div className="md:absolute md:left-0 md:w-[35rem] mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <span className="text-white text-xs sm:text-sm md:text-base lg:text-xl">
              A passionate Frontend Developer with 1 year of experience in
              creating intuitive and visually appealing web applications. I
              thrive on learning new technologies and constantly improving my
              skills. My curiosity drives me to explore different aspects of
              development and design, ensuring that I stay up to date with the
              latest trends in the tech industry.
            </span>
          </div>
        </div>
        <div className="absolute right-0 -top-24 h-full flex justify-end items-center">
          <img
            src={object1}
            alt="object1"
            className="w-40 sm:w-48 md:w-56 lg:w-60 object-cover md:mr-96 mb-96 md:mb-60 lg:mb-80 opacity-90"
          />
          <img
            src={object3}
            alt="object3"
            className="absolute bottom-0 md:top-80 w-48 sm:w-60 md:w-72 lg:w-80 object-cover mt-32 sm:mt-36 md:mt-4 opacity-90"
          />
        </div>
      </div>
    </div>
  );
}
