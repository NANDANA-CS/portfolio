// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Skill from './pages/Skill'
// import Navbar from './components/Navbar'
// import Project from './pages/Project'
// import Projects from './pages/Project'
// import Footer from './components/Footer'
// import Contact from './pages/Contact'
// import SplashCursor from './pages/SplashCursor/SplashCursor'


// const App = () => {
//   return (
//     <>
//     <SplashCursor/>
//     <Navbar/>
//     <Home/>
//     <About/>
//     <Skill/>
//     <Project/>
//     <Contact/>
//     <Footer/>      
//     </>
//   )
// }

// export default App





import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Navbar from './components/Navbar';
import Project from './pages/Project';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SplashCursor from './components/reactbits/SplashCursor/SplashCursor';


const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skill />
        <Project />
        
      <SplashCursor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;