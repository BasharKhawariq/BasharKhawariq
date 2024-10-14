import React from "react";
import experience1 from "../../assets/experience1.png";
import experience2 from "../../assets/experience2.png";
import experience3 from "../../assets/experience3.png";

export default function Experiences() {
  const experiencesData = [
    {
      id: 1,
      company: "PT. Sigma Cipta Caraka (Telkomsigma)",
      role: "Frontend Web Developer",
      duration: "Oct 2023 - Oct 2024",
      description: [
        "Expertly slicing UI elements, crafting layouts, and designing visually stunning interfaces that captivate users.",
        "Expertise in debugging and fixing errors and bugs in apps.",
        "Connecting APIs with the backend to handle dynamic data smoothly and make sure everything works well together.",
      ],
      techStacks: ["Vue Js", "Nuxt Js", "Python"],
    },
    {
      id: 2,
      company: "Seven Inc.",
      role: "Photographer, Videographer, and Video Editor",
      duration: "Jun 2022 - Nov 2022",
      description: [
        "Scout locations for shoots and arrange necessary equipment (cameras, lighting, lenses).",
        "Capture footage based on the storyboard, ensuring proper framing, lighting, and camera movements.",
        "Use video editing software (e.g., Adobe Premiere, DaVinci Resolve, Final Cut) to assemble shots.",
      ],
      techStacks: ["DSLR", "Mirrorless", "Adobe Premiere", "DaVinci Resolve"],
    },
  ];

  return (
    <div id="experience" className="relative min-h-screen w-full bg-black text-white py-10 flex flex-col items-center">
      <img
        src={experience1}
        alt="experience1"
        className="absolute top-0 right-0 w-20 sm:w-28 md:w-36 lg:w-40 object-cover opacity-90"
      />
      <img
        src={experience2}
        alt="experience2"
        className="absolute md:top-56 top-96 left-0 w-20 sm:w-28 md:w-36 lg:w-40 object-cover opacity-90"
      />
      <img
        src={experience3}
        alt="experience3"
        className="absolute bottom-0 right-0 w-20 sm:w-28 md:w-36 lg:w-40 object-cover opacity-90"
      />
      <h2 className="text-4xl font-bold mb-12">Experiences</h2>
      <div className="max-w-6xl w-full">
        {experiencesData.map((exp) => (
          <div key={exp.id} className="mb-12 relative">
            {/* Timeline Connector */}
            <div className="absolute left-3 top-0 h-full border-l-2 border-gray-600"></div>

            {/* Timeline Dot */}
            <div className="absolute left-[0.3rem] top-0 w-4 h-4 bg-white rounded-full"></div>

            <div className="ml-10">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

              <div className="bg-gray-900/80 p-5 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                <ul className="list-disc list-inside mb-4">
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-gray-300 font-semibold">
                    Related Techstacks:
                  </span>
                </div>
                <div className="flex flex-row gap-1">
                  {exp.techStacks.map((stack, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 mt-2 text-xs bg-gray-700 rounded-full"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
