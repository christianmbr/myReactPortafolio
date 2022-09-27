import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { SiSololearn } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import React from 'react'

const Socials = () => {
  return (
    <div className="socials">
      <a className='anim' href='https://github.com/christianmbr' target='_blank' rel='noreferrer'><AiFillGithub /></a>
      <a className='anim' href='https://www.instagram.com/asora4u/' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
      <a className='anim' href='https://www.facebook.com/profile.php?id=100007255935400' target='_blank' rel='noreferrer'><AiFillFacebook /></a>
      <a className='anim' href='https://www.sololearn.com/profile/10362344' target='_blank' rel='noreferrer'><SiSololearn /></a>
      <a className='anim' href='https://wa.link/ptrnr7' target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
    </div>
  )
}

export default Socials
