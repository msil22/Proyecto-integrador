import React from 'react'
import './PerfilUser.css'

export default function PerfilUsuario() {
  return (
    <>
        <div className='headerUsuario'>
          <div className="container-fluid header">
            <img className="imagen" src="https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14047.jpg" alt=""/>
        </div>
        
        <h1 className="nombre-usuario">NOMBRE APELLIDO APELLIDO</h1>
        <div className="perfil">
            <h3>Acerca de mí</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aliquam ex ipsa hic asperiores reiciendis. Nihil non, distinctio expedita molestiae perspiciatis dolorem, culpa nisi incidunt quam quod cumque repellendus repudiandae!</p>
        </div>
        </div>
    </>
  )
}