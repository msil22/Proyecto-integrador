import React from 'react'
import './About.css'
import Lottie from 'lottie-react'
import animationData from '../../../public/Animation.json'

 function About() {
  return (
    <div className='about-container' id='acerca-de'>
        <div className='about-image'>
          <Lottie animationData={animationData} />
        </div>
        <div className='about-text'>
          <h2>Acerca de Acá Estamos</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis necessitatibus ut, cumque ratione omnis quam sequi non libero porro obcaecati facilis quod id iste, nisi quaerat eos commodi! Aspernatur, repellat.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis necessitatibus ut, cumque ratione omnis quam sequi non libero porro obcaecati facilis quod id iste, nisi quaerat eos commodi! Aspernatur, repellat.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis necessitatibus ut, cumque ratione omnis quam sequi non libero porro obcaecati facilis quod id iste, nisi quaerat eos commodi! Aspernatur, repellat.</p>
        </div>
    </div>
  )
}

export default About