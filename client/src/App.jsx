import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Navbar from './components/Navbar'
import Project from './pages/Project'
import Projects from './pages/Project'
import Footer from './components/Footer'
import Contact from './pages/Contact'


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>      
    </>
  )
}

export default App
