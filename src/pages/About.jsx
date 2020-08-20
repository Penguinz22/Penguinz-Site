import React from "react";

const About = () => {
  return (
    <div
      className="p-5 flex flex-col items-center justify-center"
      style={{ minHeight: "60vh" }}
    >
      <h1 className="font-mono text-6xl font-medium text-white mb-3">
        About Me
      </h1>
      <p className="font-sans text-2xl text-gray-100 w-2/3 text-justify">
        Hello I am Penguinz, also known as Penguinz22. I am a Java developer
        interested in the field of game development. I also have experience with
        Minecraft server plugin development using Spigot and then HTML, CSS,
        Javascript, and Node. Currently I am in the process of learning C++ and
        further indepth OpenGL and other low level graphics APIs such as Vulkan.
      </p>
    </div>
  );
};

export default About;
