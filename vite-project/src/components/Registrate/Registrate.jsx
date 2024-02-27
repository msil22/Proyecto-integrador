import React from 'react'
import './Registrate.css'
import { FaUser, FaLock } from "react-icons/fa";

function Registrate() {
  return (
    <div className='wrappers'>
        <form action="">
            <h1 className='tituloRegistros'>Registro</h1>
            <div className="input-boxs">
                <input type="text" placeholder='Correo' required/>
                <FaUser className='iconss' />
            </div>
            <div className="input-boxs">
                <input type="password" placeholder='Contraseña' required/>
                <FaLock className='iconss'/>
            </div>
            <div className="input-boxs">
                <input type="password" placeholder='Repetir Contraseña' required/>
                <FaLock className='iconss'/>
            </div>
            <div className="remember-forgots">
                <label><input type="checkbox" /></label>
                <a href="#"> Acepto términos y condiciones</a>
            </div>
            <button type="submit">Regístrate</button>
        </form>

    </div>
  )
}

export default Registrate