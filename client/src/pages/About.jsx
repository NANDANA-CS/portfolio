import React from 'react';
import { FaHeart, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0d0d2b] to-[#2b0a3d] text-white px-4 sm:px-6 py-20 pt-32 sm:pt-40"
      id="about"
    >
      <div className="max-w-7xl mx-auto mt-15">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-pink-500">About Me</h2>
          <p className="text-gray-300 mt-2 text-base sm:text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with a love for creating innovative web solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-20">
          <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-4 border-pink-500 overflow-hidden shadow-lg">
            <img
              src="/img/IMG_2505-Photoroom.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>


          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Hello! I'm Nandana C S
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-4">
              I'm a passionate MERN Stack Developer who loves turning ideas into beautiful,
              functional web applications. With expertise in MongoDB, Express.js, React, and
              Node.js, I create full-stack solutions that deliver exceptional user experiences.
            </p>
            <p className="text-gray-300 text-base sm:text-lg mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the developer community.
            </p>

          
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { Icon: FaHeart, color: 'text-red-500', title: 'Passionate', desc: 'Love for clean code' },
                { Icon: FaCode, color: 'text-blue-400', title: 'Skilled', desc: 'Full-stack expertise' },
                { Icon: FaLightbulb, color: 'text-yellow-400', title: 'Creative', desc: 'Innovative solutions' },
              ].map((trait, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1a3d] rounded-lg p-4 text-center shadow-md"
                >
                  <trait.Icon className={`${trait.color} text-2xl mx-auto mb-2`} />
                  <h4 className="text-lg font-semibold">{trait.title}</h4>
                  <p className="text-sm text-gray-400">{trait.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
