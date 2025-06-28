import React from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Home = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-[#000000] to-[#2b0a3d] text-white font-sans pt-40 md:pt-60 px-4"
            id="home"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Hi, I'm</h2>
                <h1 className="text-pink-500 text-6xl sm:text-7xl md:text-8xl font-extrabold mb-4 animate-pulse">Nandana</h1>
                <p className="text-base sm:text-lg md:text-2xl max-w-2xl mb-8 text-gray-300">
                    MERN Stack Developer passionate about creating beautiful, functional web applications
                </p>

            
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                    <div className="flex items-center space-x-2 bg-[#1a1a3d] px-6 py-3 rounded-full shadow-md">
                        <SiMongodb className="text-green-500 text-xl" />
                        <span className="text-sm sm:text-base">MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#1a1a3d] px-6 py-3 rounded-full shadow-md">
                        <SiExpress className="text-yellow-500 text-xl" />
                        <span className="text-sm sm:text-base">Express</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#1a1a3d] px-6 py-3 rounded-full shadow-md">
                        <SiReact className="text-blue-400 text-xl" />
                        <span className="text-sm sm:text-base">React</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#1a1a3d] px-6 py-3 rounded-full shadow-md">
                        <SiNodedotjs className="text-green-400 text-xl" />
                        <span className="text-sm sm:text-base">Node.js</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#about"
                        className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-semibold text-base sm:text-lg shadow-lg hover:scale-105 transition-transform text-center"
                    >
                        Learn More About Me
                    </a>
                    <a
                        href="#contacts"
                        className="border border-purple-400 px-6 py-3 rounded-full text-purple-400 font-semibold text-base sm:text-lg hover:bg-purple-800 transition-colors text-center"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
