import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Toni, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I'm a passionate web developer looking for new projects and challenges. Currently I work full time as a IT Supporter and develop websites as a side-business in my spare time. If you want a modern, good looking and responsive website, just contact me.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
