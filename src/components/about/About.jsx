import React from 'react'
import { FormattedMessage } from 'react-intl'
import Fade from 'react-reveal/Fade'
import './about.css'

const sinValor = 'Not found'

export default function About() {
  const path = 'https://drive.google.com/file/d/1AEZyX5QaWBgNsq5vXwV5OzzBdwpCK8f-/view?usp=sharing'

  return (
    <div id='about' className='aboutContainer'>
      <Fade left cascade duration={1000}>
        <div className='aboutContainer-cv'>
          <ul>
            <li>
              <b><FormattedMessage id='about.mail' defaultMessage={sinValor} /></b> Christianmbr2@hotmail.com
            </li>
            <li><b><FormattedMessage id='about.nombre' defaultMessage={sinValor} /></b> Christian Benitez</li>
            <li>
              <b><FormattedMessage id='about.edad' defaultMessage={sinValor} /></b> 25
            </li>
          </ul>
          <a href={path} target='_blank' rel='noreferrer'><FormattedMessage id='about.hojaDeVida' defaultMessage={sinValor} /></a>
        </div>
        <div>
          <h2><FormattedMessage id='about.titulo' defaultMessage={sinValor} /></h2>
          <p>
            <FormattedMessage id='about.introduccion-p1' defaultMessage={sinValor} />
          </p>
          <p>
            <FormattedMessage id='about.introduccion-p2' defaultMessage={sinValor} />
          </p>
        </div>
      </Fade>
    </div>
  )
}
