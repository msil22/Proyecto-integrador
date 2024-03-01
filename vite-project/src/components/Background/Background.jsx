import React from 'react'
import './Background.css'
import { Link } from 'react-router-dom'


export default function Background() {
  return (
    <>
    <div className='hero-container '>
      <div className='video-container'>
        <video src='/abstract_line.mp4' autoPlay loop muted />
      </div>
      <div className='text-container'>
        <h1>Acá Estamos</h1>
        <p>Explora tu potencial profesional aquí.</p>
        <p>¡Regístrate para desbloquear un mundo de posibilidades!</p>
        <div className='buttons'>
          <Link to={'/registro-empresa'}><button className='boton-empresa'>Soy Empresa</button></Link>
          <Link to={'/registro-talento'}><button className='boton-usuario'>Soy Candidato</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}