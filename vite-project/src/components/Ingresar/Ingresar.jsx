import React from 'react'
import './Ingresar.css'
import { FaUser, FaLock } from "react-icons/fa";


function Ingresar() {
  return (
    <div id='grandediv'>
    <div className='wrapper'>
        <form className="ingreso"  action="">
            <h1 className='tituloRegistro'>Ingresa</h1>
            <div className="input-box">
                <input type="text" placeholder='Usuario' required/>
                <FaUser className='icons' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Contraseña' required/>
                <FaLock className='icons'/>
            </div>
            <div id="remember-forgot">
                <label><input type="checkbox" />Recuerdame</label>
                <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            
            <button type="submit">Ingresa</button>
            <div className="register-link">
                <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p> 
            </div>
        </form>

    </div>
    </div>
  )
}

export default Ingresar