import React,{useRef} from 'react';
import { FaHeart, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
     
  return (
    <>
    
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d2b] to-[#2b0a3d] text-white px-6 py-16 pt-40" id="about" >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-bold text-pink-500">About Me</h2>
          <p className="text-gray-300 mt-2 text-lg">
            Passionate full-stack developer with a love for creating innovative web solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
    
          <div className="w-114 h-114 rounded-full border-4 border-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center mb-10 md:mb-0 mt-20">
            <img
              src="/img/IMG_2505-Photoroom.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>


          <div className="md:ml-12 max-w-xl mt-30">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Hello! I'm Nandana C S</h3>
            <p className="text-gray-300 text-lg mb-4">
              I'm a passionate MERN Stack Developer who loves turning ideas into beautiful,
              functional web applications. With expertise in MongoDB, Express.js, React, and
              Node.js, I create full-stack solutions that deliver exceptional user experiences.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the developer community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#1a1a3d] rounded-lg p-4 text-center shadow-md">
                <FaHeart className="text-red-500 text-2xl mx-auto mb-2" />
                <h4 className="text-lg font-semibold">Passionate</h4>
                <p className="text-sm text-gray-400">Love for clean code</p>
              </div>
              <div className="bg-[#1a1a3d] rounded-lg p-4 text-center shadow-md">
                <FaCode className="text-blue-400 text-2xl mx-auto mb-2" />
                <h4 className="text-lg font-semibold">Skilled</h4>
                <p className="text-sm text-gray-400">Full-stack expertise</p>
              </div>
              <div className="bg-[#1a1a3d] rounded-lg p-4 text-center shadow-md">
                <FaLightbulb className="text-yellow-400 text-2xl mx-auto mb-2" />
                <h4 className="text-lg font-semibold">Creative</h4>
                <p className="text-sm text-gray-400">Innovative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
