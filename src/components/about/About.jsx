import React from 'react'
import './about.css'

export default function About() {
  const path = 'https://drive.google.com/file/d/1v4MX7UKSoEcVdHwF_Vvb9269lN48I9bM/view?usp=sharing'

  return (
    <div id='about' className='aboutContainer'>
      <div className='aboutContainer-cv'>
        <ul>
          <li><b>Nombre:</b> Christian Benitez</li>
          <li>
            <b>Edad:</b> 25
          </li>
          <li>
            <b>Correo:</b> Christianmbr2@hotmail.com
          </li>
        </ul>
        <a href={path} target='_blank' rel='noreferrer'>Ver hoja de vida</a>
      </div>
      <div>
        <h2>SOBRE MI</h2>
        <p>
          Hola me llamo Christian. Soy tecnólogo en desarrollo de software y estudiante de ingeniería de software de la universidad Pascual Bravo de la ciudad de Medellín en Colombia. Vengo de un pequeño punto dentro de este basto universo llamado Castilla. Nacido de dos jóvenes padres que humildemente y con mucho amor, decidieron sembrar dentro de una casita una familia, un hogar. De pequeño siempre mi don fue crear, creaba todo tipo de objetos que consideraba en ese entonces juguetes, desarmaba cualquier cosa que pudiera con el fin de ojear sus interiores y ver sus mecanismos. Me considero un artista por mi habilidad de creación, es un hábito que pertenece en mí después de tantos años y que destaco.
        </p>
        <p>
          Actualmente soy estudiante de ingeniería de software. Dentro de este campo destaco mi habilidad en solucionar cualquier tipo de problemas. Poseo una mente abstracta para nada cuadrada que a lo largo de mi carrera como ingeniero me ha ayudado a cumplir con todas mis tareas y responsabilidades. Soy un amante la optimización, siempre busco la manera mas optima para realizar mis tareas y así llegar a mis objetivos más rápido y sencillo. Me gusta estructurar cualquier actividad dentro de mi trabajo. Considero que es un arte lindo y valioso que últimamente lo estoy explotando al máximo para la labor de mis actividades universitarias.
        </p>
        <p>
          Hablando sobre temas más personales, soy una persona que dentro de todos mis valores destaco la lealtad y gratitud. Soy un ser muy agradecido, así que, si me regalas una enseñanza o un poco de tiempo de calidad, posiblemente me lo llevaré, agradeceré y recordaré por el resto de mis días. 
        </p>
      </div>
    </div>
  )
}
