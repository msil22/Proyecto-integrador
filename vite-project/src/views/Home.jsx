import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Background from '../components/Background/Background'

function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-text'>
        <h1 className='heading'>
          Acá Estamos
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatibus maxime, quas dolorem itaque magni ducimus pariatur aperiam nostrum natus possimus illum, aspernatur incidunt! Consequuntur eaque magni dolorum accusantium tempore!
        </p>
      </div>
    </div>
  )
}

export default Home
