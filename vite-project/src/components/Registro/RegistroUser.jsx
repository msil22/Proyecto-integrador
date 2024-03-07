import React, { useState } from 'react';
import './Registro.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const RegistroUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || password !== repeatPassword) {
        alert('Verifica que todos los campos estén completos y las contraseñas coincidan.');
        return;
    }

    const user = {
        email: email,
        password: password,
    };

    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            credentials: 'include',
        });

        const data = await response.json();
        console.log('Server Response:', data);

        if (response.status === 201) {
            alert('Usuario registrado correctamente');
            console.log('Data from server:', data); // Agregar este log
            navigate('/inicio-usuario');
        } else {
            alert('Error al registrar usuario: ' + (data.msg || 'Error desconocido'));
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud. Consulta la consola para más detalles.');
    }
};

  return (
    <div id="divgrande">
      <div className="wrappers">
        <form onSubmit={handleSubmit}>
          <h1 className="tituloRegistros">Registro</h1>
          <div className="input-boxs">
            <input type="text" placeholder="Correo" onChange={handleEmail} />
            <FaUser className="iconss" />
          </div>
          <div className="input-boxs">
            <input type="password" placeholder="Contraseña" onChange={handlePassword} />
            <FaLock className="iconss" />
          </div>
          <div className="input-boxs">
            <input
              type="password"
              placeholder="Repetir Contraseña"
              onChange={handleRepeatPassword}
            />
            <FaLock className="iconss" />
          </div>
          <div className="remember-forgots">
            <label>
              <input type="checkbox" />
            </label>
            <span>Acepto términos y condiciones</span>
          </div>
          <Link to={'/formulario-talento'}>
            <button type="submit">Regístrate</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistroUser;