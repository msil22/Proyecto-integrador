import React from 'react'
import './Background.css'


export default function Background() {
  return (
    <>
    <div className='hero-container '>
      <div className='video-container'>
        <video src='/abstract_line.mp4' autoPlay loop muted />
      </div>
      <div className='text-container'>
        <h1>Acá Estamos</h1>
        <p>Descubre tu camino profesional en nuestra plataforma</p>
        <div className='buttons'>
          <button className='boton-empresa'>Soy Empresa</button>
          <button className='boton-usuario'>Soy Candidato</button>
        </div>
      </div>
    </div>
    </>
  )
}

