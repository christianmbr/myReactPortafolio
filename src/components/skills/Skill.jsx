import React from 'react'

export default function Skill({ icon, title, text }) {
  return (
    <div className='skillContainer-Child-skill anim'>
      {icon}
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
