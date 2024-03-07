import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './InicioSesion.css'; // Asegúrate de tener tu archivo CSS importado
import { Link } from 'react-router-dom';
import PerfilUsuario from '../perfilUsuario/PerfilUser';

const InicioSesionGeneral = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogueado, setUserLogueado] = useState({});
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserLogueado({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail("");
        setPassword("");
        setUserLogueado(data);

        const token = jwtDecode(data.token);
        localStorage.setItem("token", JSON.stringify(data.token));
        alert("Inicio de sesión exitoso");

        // Redirige a la siguiente pestaña
        history.push("/feed-usuario");
      } else {
        alert(data.message || "Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error en la solicitud. Consulta la consola para más detalles.");
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const token = jwtDecode(storedToken);
      setUserLogueado(token);
    }
  }, []);

  return (
    <body id="fondo2">
      <main>
        <div className="cuadrado">
          <div className="registro-flotante">
            <h2>Inicia sesión</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="correo">Correo electrónico:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={email}
                onChange={handleEmail}
              />
              <label htmlFor="contraseña">Contraseña:</label>
              <input
                type="password"
                id="contraseña"
                name="contraseña"
                value={password}
                onChange={handlePassword}
              />
              <button type="submit"><Link to={'/feed-usuario'}>Ingresar</Link></button>
            </form>
            {userLogueado && userLogueado.email && (
              <>
                <p>Bienvenido, {userLogueado.email}</p>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </>
            )}
          </div>
        </div>
      </main>
    </body>
  );
};

export default InicioSesionGeneral;