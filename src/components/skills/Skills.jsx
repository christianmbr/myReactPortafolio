import React from 'react'
import Skill from './Skill.jsx'
import { BiBrain } from 'react-icons/bi'
import { AiOutlineDatabase } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'

import './skills.css'

const skill1Icon = <BiBrain className='skillContainer-Child-skill-icon'/>
const skill1Text = 'Poseo conocimientos sobre diferentes modelos de clasificación para realizar todo tipo de predicción supervisada o no supervisada. Capacidad de evaluar los modelos de clasificación, regresión para mejorar la calidad de predicción del modelo.'

const skill2Icon = <AiOutlineDatabase className='skillContainer-Child-skill-icon'/>
const skill2Text = 'Poseo habilidades para analizar datos masivos con herramientas de manipulación y visualización con Python todo dirigido a la ciencia de los datos. Herramientas: Python (matplotlib, pandas, numpy), Data studio.'

const skill3Icon = <FaReact className='skillContainer-Child-skill-icon' />
const skill3Text = 'Habilidades básicas en la programación web. Conocimiento en herramientas web cono CSS, HTML, React, NodeJs, MongoDB, Json. He utilizado lenguajes de programación como PHP, JavaScript, Python.'

export default function Skills() {
  return (
    <div id='skills' className='skillContainer'>
      <div className='skillContainer-Child'>
        <h2>HABILIDADES</h2>
        <p>
          Habilidades destacadas
        </p>
      </div>
      <div className='skillContainer-Child-skills'>
        <Skill
          title='Inteligencia artificial'
          icon={skill1Icon}
          text={skill1Text}
        />

        <Skill
          title='Análisis de datos'
          icon={skill2Icon}
          text={skill2Text}
        />

        <Skill
          title='Programación web'
          icon={skill3Icon}
          text={skill3Text}
        />
      </div>
    </div>
  )
}
