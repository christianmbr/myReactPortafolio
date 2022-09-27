import './header.css'
import React from 'react'
import Socials from './Socials'

const Header = () => {
  return (
    <div className='container header-css' id='home'>
      <div>
        <h1>HOLA SOY CHRISTIAN</h1>
        <h2 className='text-primary anim'>Tecnologo en desarrollo de software</h2>
        <Socials />
      </div>
    </div>
  )
}

export default Header
