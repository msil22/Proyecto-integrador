import React from 'react'
import './Empresas.css'
import Carrusel from '../Carrusel/Carrusel'
import Tarjetas from '../Tarjetas/Tarjetas'

function Empresas() {
  return (
    <div className='companies-container' id='empresas'>
      <div className='companies-title'>
        <h2>Conoce Las Empresas Colaboradoras</h2>
      </div>
      <div className='carrusel-section'>
        <Carrusel />
      </div>
      <div className='card-section'>
        <Tarjetas />
      </div>
    </div>
  )
}

export default Empresas