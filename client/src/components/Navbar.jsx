import React, { useRef ,useState,useEffect} from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

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

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-white text-black dark:bg-[#0d0d2b] dark:text-white shadow-md transition-colors duration-300">

                <h1 className="text-3xl font-bold text-pink-500">Nandana CS</h1>
                <ul className="flex space-x-8 text-lg">
                    <li className="hover:text-pink-400 cursor-pointer"><a href="#home">Home</a></li>
                    <li className="hover:text-pink-400 cursor-pointer "><a href="#about">About</a></li>
                    <li className="hover:text-pink-400 cursor-pointer"><a href="#skill">Skills</a></li>
                    <li className="hover:text-pink-400 cursor-pointer"><a href="#projects">Projects</a></li>
                    <li className="hover:text-pink-400 cursor-pointer"><a href="#contacts">Contact</a></li>
                </ul>
                <button onClick={toggleTheme} className="text-2xl cursor-pointer">
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </>
    )
}

export default Navbar
