import React from 'react'
import './Registro.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function RegistroUser() {
  return (
    <div id='divgrande'>
    <div className='wrappers'>
        <form action="">
            <h1 className='tituloRegistros'>Registro</h1>
            <div className="input-boxs">
                <input type="text" placeholder='Correo' />
                <FaUser className='iconss' />
            </div>
            <div className="input-boxs">
                <input type="password" placeholder='Contraseña' />
                <FaLock className='iconss'/>
            </div>
            <div className="input-boxs">
                <input type="password" placeholder='Repetir Contraseña' />
                <FaLock className='iconss'/>
            </div>
            <div className="remember-forgots">
                <label><input type="checkbox" /></label>
                <a href="#"> Acepto términos y condiciones</a>
            </div>
            <Link to={'/formulario-talento'}><button type="submit">Regístrate</button></Link>
        </form>

    </div>
    </div>
  )
}

export default RegistroUser