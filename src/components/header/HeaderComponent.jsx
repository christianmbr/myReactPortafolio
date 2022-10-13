import './header.css'
import React from 'react'
import Socials from './Socials'
import { FormattedMessage } from 'react-intl'
import Fade from 'react-reveal/Fade'

const sinValor = 'Not found'

const Header = () => {
  return (
    <Fade duration={2000}>  
      <div className='container header-css' id='home'>
        <div>
          <h1><FormattedMessage id='header.nombre' defaultMessage={sinValor} /></h1>
          <h2 className='text-primary'><FormattedMessage id='header.trabajo' defaultMessage={sinValor} /></h2>
          <Socials />
        </div>
      </div>
    </Fade>
  )
}

export default Header
