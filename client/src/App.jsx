import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import Skill from './pages/Skill'
import Navbar from './components/Navbar'
// import Projects from './pages/Project'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
         
        </Routes>

      </BrowserRouter> */}
    </>
  )
}

export default App
