import React from 'react'
import './footer.css'
import { FormattedMessage } from 'react-intl'

const sinValor = 'Not found'
export default function Footer() {
  return (
    <div id='music' className='footerContainer'><FormattedMessage id='footer' defaultMessage={sinValor} /></div>
  )
}
