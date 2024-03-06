import React from 'react'
import './PerfilEmp.css'
import TablaTalentos from '../TablaTalentos/TablaTalentos'

function PerfilEmp() {
  return (
<>
    <div className='pefil-empresa'>
        <div className="container-fluid emp-header">
            <img className="logo" src="https://img.freepik.com/vector-premium/logotipo-cubo-generico_9569-169.jpg?w=740" alt=""/>
        </div>
        <h1 className="nombre-empresa">NOMBRE EMPRESA</h1>
            <ul className="redes-empresa">
                <li>
                    <i className="bi bi-globe"></i><a href="">Web</a>
                </li>
                <li>
                    <i className="bi bi-instagram"></i><a href="">Instagram</a>
                </li>
                <li>
                    <i className="bi bi-facebook"></i><a href="">Facebook</a>
                </li>
            </ul>
        <div className="nosotros-empresa">
            <h3>Sobre Nosotros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aliquam ex ipsa hic asperiores reiciendis. Nihil non, distinctio expedita molestiae perspiciatis dolorem, culpa nisi incidunt quam quod cumque repellendus repudiandae!</p>
        </div>
    </div>
    <div className='tabla-talento'>
        <h2>Revisa los Talentos</h2>
        <TablaTalentos />
    </div>
</>
  )
}

export default PerfilEmp