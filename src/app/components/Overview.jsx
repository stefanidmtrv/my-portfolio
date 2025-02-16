import React from "react";
import Card from "./Card";
import { FcComboChart } from "react-icons/fc";
import { FaGlobe, FaCog } from "react-icons/fa";
const Overview = () => {
  return (
    <section className="sm:px-16 xl:px-48">
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Overview
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        I am an enthusiastic and resilient Software Developer with a First Class
        Honours Master's degree from Swansea University. I am passionate about
        software and web development, and have hands-on experience in
        JavaScript, HTML, CSS, TypeScript, and Python. My expertise spans web
        development and data processing, which I have developed through both
        professional experience and personal projects. I am a strong problem
        solver and team player, always eager to apply my skills while
        continuously learning new technologies.
      </p>
      <div class="grid grid-cols-3 gap-4">
        <Card
          title="Data Visualisation"
          icon={<FcComboChart className="w-full" size="100px" />}
        />
        <Card
          title="Web Development"
          icon={<FaGlobe className="w-full text-blue-400" size="100px" />}
        />
        <Card
          title="Data Processing"
          icon={<FaCog className="w-full text-green-300" size="100px" />}
        />
      </div>
    </section>
  );
};

export default Overview;
