import React from "react";

const Projects = () => {
  const projectdetails = [
    {
      name: "BlinkBlink",
      loc: "blinkBlinkNoBg.png",
      des: "A ai robo  with full of Emotion..",
      link: "https://delishfoodsite.vercel.app/",
    },
    {
      name: "PandaPixel",
      loc: "pandaPixelNoBg.png",
      des: "Coming Soon",
      link: "",
    },
    {
      name: "KunuMunu",
         loc: "3robo.png",
       des: "Coming Soon",
      link: "",
    },
    // {
    //  name: "ComingSoon",
    //   loc: "comingSoon.png",
    // des: "...........................................................................",
    //   link: "",
    // },
    // {
    //   name: "ComingSoon",
    //     loc: "comingSoon.png",
    //   des: "...........................................................................",
    //   link: "",
    // },
    // {
    //  name: "ComingSoon",
    //      loc: "comingSoon.png",
    //   des: "...........................................................................",
    //   link: "",
    // },
  ];

  return (
    <section id="products" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-lg text-blue-400">Our</p>
          <h2 className="text-3xl font-bold text-white">PRODUCTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectdetails.map((project, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md">
              <img
                src={`/assets/images/${project.loc}`}
                alt={`Project ${project.name}`}
                className="rounded-md md:w-full md:h-48 object-cover bg-gray-950"
              />
              <h3 className="text-lg font-semibold mt-4">{project.name}</h3>
              <p className="text-gray-400">{project.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
