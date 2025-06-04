import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0d0d2b] to-[#2b0a3d] text-white font-sans pt-60" id="home">
            <div>
                <div className="flex flex-col justify-center items-center text-center px-4">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm</h2>
                    <h1 className="text-pink-500 text-8xl md:text-9xl font-extrabold mb-6">Nandana</h1>
                    <p className="text-lg md:text-2xl max-w-2xl mb-10 text-gray-300">
                        MERN Stack Developer passionate about creating beautiful, functional web applications
                    </p>
                    <div className="flex flex-wrap gap-4 mb-15">
                        <div className="flex items-center space-x-2 bg-[#1a1a3d] px-8 py-4 rounded-full shadow-md">
                            <SiMongodb className="text-green-500" />
                            <span>MongoDB</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-[#1a1a3d] px-8 py-4 rounded-full shadow-md">
                            <SiExpress className="text-yellow-500" />
                            <span>Express</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-[#1a1a3d] px-8 py-4 rounded-full shadow-md">
                            <SiReact className="text-blue-400" />
                            <span>React</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-[#1a1a3d] px-8 py-4 rounded-full shadow-md">
                            <SiNodedotjs className="text-green-400" />
                            <span>Node.js</span>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#about" className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform">
                            Learn More About Me
                        </a>

                        <a href='#contacts' className="border border-purple-400 px-6 py-3 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-800 transition-colors">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
            <div>
         </div>
        </div>
    );
};

export default Home;
