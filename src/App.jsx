// import { useState } from 'react'
import './App.scss'
import {Routes, Route, useLocation} from 'react-router-dom'


import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particles from './utils/particles'

import NavBar from './components/navbar/NavBar'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'
import Skills from './containers/Skills/Skills'
import Resume from './containers/Resume/Resume'
import Portfolio from './containers/Portfolio/Portfolio'
function App() {
  const location = useLocation();
  console.log(location)
  const handleInit = async (main) => {
    // console.log(main);
    await loadFull(main);
  }
  const renderParticleJsInHomePage = location.pathname ==='/';

  return (
    <div className='App'>

      {renderParticleJsInHomePage && <Particles id="particles" init={handleInit} options={particles}/>}
      <NavBar/>
      

      <div className='App__main-page-content'>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
