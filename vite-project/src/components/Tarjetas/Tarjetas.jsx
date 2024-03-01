import React from 'react'
import './Tarjetas.css'
import { Link } from 'react-router-dom'

function Tarjetas() {
  return (
    <div className='card-container'>
        <div className='tarjeta'>
            <div className='card-header'>
                <img src="/cocacola-logo.png" alt="" />
            </div>
            <div className='card-icons'>
                <li className='bi bi-globe'><Link to='/'></Link></li>
                <li className='bi bi-instagram'><Link to='/'></Link></li>
                <li className='bi bi-facebook'><Link to='/'></Link></li>
            </div>
            <div className='card-content'>
                <div className='info-empresa'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officia hic fugiat sunt at, esse minus sed, ipsum quidem, alias perferendis quod eligendi.</p>
                </div>
            </div>
        </div>

        <div className='tarjeta'>
            <div className='card-header'>
                <img src="/generation-logo.png" alt="" />
            </div>
            <div className='card-icons'>
                <li className='bi bi-globe'><Link to='/'></Link></li>
                <li className='bi bi-instagram'><Link to='/'></Link></li>
                <li className='bi bi-facebook'><Link to='/'></Link></li>
            </div>
            <div className='card-content'>
                <div className='info-empresa'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officia hic fugiat sunt at, esse minus sed, ipsum quidem, alias perferendis quod eligendi.</p>
                </div>
            </div>
        </div>

        <div className='tarjeta'>
            <div className='card-header'>
                <img src="/lafabrica-logo.png" alt="" />
            </div>
            <div className='card-icons'>
                <li className='bi bi-globe'><Link to='/'></Link></li>
                <li className='bi bi-instagram'><Link to='/'></Link></li>
                <li className='bi bi-facebook'><Link to='/'></Link></li>
            </div>
            <div className='card-content'>
                <div className='info-empresa'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officia hic fugiat sunt at, esse minus sed, ipsum quidem, alias perferendis quod eligendi.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tarjetas