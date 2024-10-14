import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experiences from "./components/experience/Experiences";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contact/Contacts";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <main className="h-screen w-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}
