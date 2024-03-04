import React, { useState } from 'react';
import './NavbarEmpresa.css'
import { Link } from 'react-router-dom'

function NavbarAdmin() {

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand" ><img src="/acaestamoslogo.png" alt="logo" style={{ width: '150px', height: '80px'}} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown position-fixed top-0 end-0">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-user"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><Link to='/regular-perfiles' className="dropdown-item" >Ver cv</Link></li>
            <li><Link to='/' className="dropdown-item" >Mensajes</Link></li>
            <li><Link to='/' className="dropdown-item" >Cerrar Sesión</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavbarAdmin