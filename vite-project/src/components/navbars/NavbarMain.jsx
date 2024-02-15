import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function NavbarMain() {
  return (
    <>
    <nav className="navbar navbar-expand-md fixed-top navbar-scrolled">
		<div className="container-fluid">
			<Link to={"/"}><a className="navbar-brand" href="../index.html">
				<img src="../../public/logo renca negro.png" alt="" width="100"/>
			</a></Link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
				aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="menu">
				<ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
					<li className="nav-item">
          <Link to={"/"}><a href="../index.html" class="nav-link active"><img src="../../public/Aca_estamos_logo.png" alt="" height="100"/></a></Link>
					</li>
				</ul>
			</div>

      <li class="nav-item dropdown" id="lista">
        <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="perfil"><i className="bi bi-person-circle"></i></a>
        <ul className="dropdown-menu bg-secondary" >
          <Link to={"/"}><li><a className="dropdown-item" href="">Formulario empresa</a></li></Link>
          <Link to={"/"}><li><a className="dropdown-item" href="">Mi CV</a></li></Link>
          <Link to={"/"}><li><a className="dropdown-item" href="">Mis Postulaciones</a></li></Link>
          <Link to={"/"}><li><a className="dropdown-item" href="">Mis Ofertas Guardadas</a></li></Link>
          <Link to={"/"}><li><hr className="dropdown-divider"/></li></Link>
          <Link to={"/"}><li><a className="dropdown-item" href="">Cerrar Sesión</a></li></Link>
        </ul>
      </li>
    </div>
  </nav>
    </>
  )
}

export default NavbarMain