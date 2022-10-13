import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { SiSololearn } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import React from 'react'

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/christian-mateo-benitez-rojas-619b88250/" target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
      <a href='https://github.com/christianmbr' target='_blank' rel='noreferrer'><AiFillGithub /></a>
      <a href='https://www.sololearn.com/profile/10362344' target='_blank' rel='noreferrer'><SiSololearn /></a>
      <a href='https://www.instagram.com/asora4u/' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
      <a href='https://wa.link/ptrnr7' target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
    </div>
  )
}

export default Socials
