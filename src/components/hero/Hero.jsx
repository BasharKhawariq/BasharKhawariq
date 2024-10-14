import React from "react";
import background from "../../assets/bg-hero.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-screen w-screen sm:min-h-[650px] flex flex-col items-center">
      <div className="absolute h-full w-full z-0">
        <img
          src={background}
          alt="Wave Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />
      </div>
      <section
        id="home"
        className="text-center min-h-screen flex items-center justify-center z-10"
      >
        <div data-aos="fade-up" className="flex flex-col text-center items-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 leading-snug">
            Turning designs into digital reality
          </h1>
          <p data-aos="fade-up" data-aos-delay="300" className="text-sm sm:text-base md:text-lg text-gray-300/75 mb-6 max-w-lg">
            Bringing designs to life through clean, responsive code that <br className="hidden sm:block" />
            enhances user experience across all devices
          </p>
          <button
            type="button"
            className="text-white hover:text-indigo-800 border border-white hover:bg-white/50 font-semibold rounded-full text-sm md:text-base px-5 py-2 md:px-6 md:py-3 transition-all duration-300 ease-in-out"
          >
            <span>Explore Now</span>
          </button>
        </div>
      </section>
    </div>
  );
}
