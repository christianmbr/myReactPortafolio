import React, { useState } from 'react'
import './nav.css'

import { AiFillHome } from 'react-icons/ai'
import { FaUser, FaBrain } from 'react-icons/fa'

export default function NavBar() {
  const [active, setActive] = useState('#home')

  const handleHome = () => setActive('#home')
  const handleAbout = () => setActive('#about')
  const handleSkills = () => setActive('#skills')

  return (
    <nav>
      <a href="#home" className={active === '#home' ? 'active' : ''} onClick={handleHome}><AiFillHome /></a>
      <a href="#about" className={active === '#about' ? 'active' : ''} onClick={handleAbout}><FaUser /></a>
      <a href="#skills" className={active === '#skills' ? 'active' : ''} onClick={handleSkills}><FaBrain /></a>
    </nav>
  )
}
