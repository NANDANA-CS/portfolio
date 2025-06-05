import React, { useRef, useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = (
        <>
            <li className="hover:text-pink-400 cursor-pointer"><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li className="hover:text-pink-400 cursor-pointer"><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li className="hover:text-pink-400 cursor-pointer"><a href="#skill" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li className="hover:text-pink-400 cursor-pointer"><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li className="hover:text-pink-400 cursor-pointer"><a href="#contacts" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </>
    );

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-10 md:px-10 bg-white text-black dark:bg-[#0d0d2b] dark:text-white shadow-md transition-colors duration-300">
                <h1 className="text-2xl md:text-3xl font-bold text-pink-500">Nandana CS</h1>

         
                <ul className="hidden md:flex space-x-6 text-lg">
                    {navLinks}
                </ul>

                <div className="flex items-center space-x-4">
                    <button onClick={toggleTheme} className="text-2xl">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>

                  
                    <button onClick={toggleMenu} className="text-2xl md:hidden">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

           
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-[#0d0d2b] text-black dark:text-white absolute top-20 left-0 w-full z-40 shadow-md">
                    <ul className="flex flex-col space-y-4 px-6 py-4 text-lg">
                        {navLinks}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
