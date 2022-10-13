import React, { useState, useContext } from 'react'
import { langContext } from '../../context/LanContext.js'
import './nav.css'

import { AiFillHome } from 'react-icons/ai'
import { FaUser, FaBrain } from 'react-icons/fa'
import { RiEnglishInput } from 'react-icons/ri'

export default function NavBar() {
  const lang = useContext(langContext)
  const [active, setActive] = useState('#home')
  const [activeIcon, setActiveIcon] = useState(false)

  const handleHome = () => setActive('#home')
  const handleAbout = () => setActive('#about')
  const handleSkills = () => setActive('#skills')
  const handleLang = () => {
    activeIcon ? setActiveIcon(false) : setActiveIcon(true)
    activeIcon ? lang.setLeng('es-co') : lang.setLeng('en-us')
  }

  return (
    <nav>
      <a href="#home" className={active === '#home' ? 'active' : ''} onClick={handleHome}><AiFillHome /></a>
      <a href="#about" className={active === '#about' ? 'active' : ''} onClick={handleAbout}><FaUser /></a>
      <a href="#skills" className={active === '#skills' ? 'active' : ''} onClick={handleSkills}><FaBrain /></a>
      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <a className={activeIcon ? 'active' : ''} onClick={handleLang}><RiEnglishInput /></a>
    </nav>
  )
}
