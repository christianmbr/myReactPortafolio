import React from 'react'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { MdGpsFixed } from 'react-icons/md'
import Fade from 'react-reveal/Fade'
import './contactMe.css'
import { FormattedMessage } from 'react-intl'

const notFound = 'N/A'

export default function ContactMe() {
  return (
    <div className='contactContainer'>
      <Fade cascade bottom duration={1000}>
        <div className='contactChild'>
          <MdGpsFixed className='contactChildIcon' />
          <h3><b><FormattedMessage id="contacto.direccion" defaultMessage={notFound} /></b></h3>
          <ul>
            <li>Colombia</li>
            <li>Medellin</li>
          </ul>
        </div>
        <div className='contactChild'>
          <AiFillPhone className='contactChildIcon' />
          <h3><b><FormattedMessage id='contacto.telefono' defaultMessage={notFound} /></b></h3>
          <ul>
            <li>3053392869</li>
            <li>3290484</li>
          </ul>
        </div>
        <div className='contactChild'>
          <AiFillMail className='contactChildIcon' />
          <h3><b><FormattedMessage id='contacto.correo' defaultMessage={notFound} /></b></h3>
          <ul>
            <li>Christianmbr2@hotmail.com</li>
          </ul>
        </div>
      </Fade>
    </div>
  )
}
