import React from 'react'
import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const handleNavigation = (page) => {
        setCurrentPage(page);
      };
    return (
        <>
            <nav className="flex justify-between items-center px-10 py-15 bg-[#0d0d2b] text-white">
                <h1 className="text-3xl font-bold text-pink-500">Nandana CS</h1>
                <ul className="flex space-x-8 text-lg">
                    <li className="hover:text-pink-400 cursor-pointer"onClick={() => handleNavigation('home')}>Home</li>
                    <li className="hover:text-pink-400 cursor-pointer "onClick={() => handleNavigation('about')}>About</li>
                    <li className="hover:text-pink-400 cursor-pointer">Skills</li>
                    <li className="hover:text-pink-400 cursor-pointer">Projects</li>
                    <li className="hover:text-pink-400 cursor-pointer">Contact</li>
                </ul>
                <FaMoon className="text-3xl cursor-pointer" />
            </nav>
        </>
    )
}

export default Navbar
