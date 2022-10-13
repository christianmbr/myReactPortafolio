import React from 'react'
import Skill from './Skill.jsx'
import './skills.css'

import { FormattedMessage } from 'react-intl' 
import { BiBrain } from 'react-icons/bi'
import { AiOutlineDatabase } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

const sinValor = 'Not found'

const skill1Icon = <BiBrain className='skillContainer-Child-skill-icon'/>
const skill2Icon = <AiOutlineDatabase className='skillContainer-Child-skill-icon'/>
const skill3Icon = <FaReact className='skillContainer-Child-skill-icon' />

export default function Skills() {
  return (
    <div id='skills' className='skillContainer'>
      <div className='skillContainer-Child'>
        <h2><FormattedMessage id='skills.titulo' defaultMessage={sinValor} /></h2>
        <p>
          <FormattedMessage id='skills.subtitulo' defaultMessage={sinValor} />
        </p>
      </div>
      <div className='skillContainer-Child-skills'>
        <Fade duration={2000}>
          <Skill
            title={<FormattedMessage id='skills.habilidad1-titulo' defaultMessage={sinValor} />}
            icon={skill1Icon}
            text={<FormattedMessage id='skills.habilidad1-info' defaultMessage={sinValor} />}
          />

          <Skill
            title={<FormattedMessage id='skills.habilidad2-titulo' defaultMessage={sinValor} />}
            icon={skill2Icon}
            text={<FormattedMessage id='skills.habilidad2-info' defaultMessage={sinValor} />}
          />

          <Skill
            title={<FormattedMessage id='skills.habilidad3-titulo' defaultMessage={sinValor} />}
            icon={skill3Icon}
            text={<FormattedMessage id='skills.habilidad3-info' defaultMessage={sinValor} />}
          />
          
          <Skill
            title={<FormattedMessage id='skills.habilidad4-titulo' defaultMessage={sinValor} />}
            text={<FormattedMessage id='skills.habilidad4-info' defaultMessage={sinValor} />}
          />

          <Skill
            title={<FormattedMessage id='skills.habilidad5-titulo' defaultMessage={sinValor} />}
            text={<FormattedMessage id='skills.habilidad5-info' defaultMessage={sinValor} />}
          />

          <Skill
            title={<FormattedMessage id='skills.habilidad6-titulo' defaultMessage={sinValor} />}
            text={<FormattedMessage id='skills.habilidad6-info' defaultMessage={sinValor} />}
          />
        </Fade>
      </div>
    </div>
  )
}
