import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { SiSololearn } from 'react-icons/si'
import React from 'react'

const Socials = () => {
  return (
    <div className="socials">
      <a href='https://github.com/christianmbr' target='_blank' rel='noreferrer'><AiFillGithub /></a>
      <a href='https://www.instagram.com/asora4u/' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
      <a href='https://www.facebook.com/profile.php?id=100007255935400' target='_blank' rel='noreferrer'><AiFillFacebook /></a>
      <a href='https://www.sololearn.com/profile/10362344' target='_blank' rel='noreferrer'><SiSololearn /></a>
    </div>
  )
}

export default Socials
