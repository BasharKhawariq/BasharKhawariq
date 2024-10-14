import React, { useState } from "react";
import "./Slider.css"; // Import your CSS file
import { SiNuxtdotjs, SiTailwindcss } from "react-icons/si";
import {
  FaVuejs,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";

export default function Skills() {
  const iconsSlider1 = [
    { icon: <SiNuxtdotjs size={25} />, text: "Nuxt" },
    { icon: <FaVuejs size={25} />, text: "Vue" },
    { icon: <FaReact size={25} />, text: "React" },
    { icon: <FaAngular size={25} />, text: "Angular" },
    { icon: <FaHtml5 size={25} />, text: "HTML5" },
    { icon: <FaCss3Alt size={25} />, text: "CSS3" },
    { icon: <FaBootstrap size={25} />, text: "Bootstrap" },
    { icon: <FaJs size={25} />, text: "JavaScript" },
    { icon: <FaNodeJs size={25} />, text: "Node.js" },
    { icon: <SiTailwindcss size={25} />, text: "Tailwind CSS" },
  ];

  const iconsSlider2 = [...iconsSlider1]; // Reuse the same icons for the second slider

  const Slider = ({
    width,
    height,
    quantity,
    reverse,
    icons,
    tiltDirection,
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
      <div
        className="slider"
        reverse={reverse ? "true" : ""}
        style={{
          "--width": `${width}px`,
          "--height": `${height}px`,
          "--quantity": quantity,
          transform: `skewY(${tiltDirection}deg)`, // Apply skew based on the direction
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="list">
          {icons.map((item, index) => (
            <div
              className={`item ${reverse ? "reverse" : ""}`}
              key={index}
              style={{
                "--position": index + 1,
                animationPlayState: isHovered ? "paused" : "running",
              }}
            >
              <div className="icon-text">
                {item.icon}
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id="skills" className="!h-screen w-screen flex flex-col gap-52 items-center justify-center">
      <h1 className="mt-10 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-textGlow">
        Skills
      </h1>

      {/* Slider 1 (Tilt Upwards) */}
      <Slider
        width={50}
        height={50}
        quantity={10}
        icons={iconsSlider1}
        tiltDirection={-3}
      />

      {/* Slider 2 (Tilt Downwards) */}
      <Slider
        width={50}
        height={50}
        quantity={10}
        reverse={true}
        icons={iconsSlider2}
        tiltDirection={3} // Tilt in the opposite direction
      />
    </div>
  );
}
