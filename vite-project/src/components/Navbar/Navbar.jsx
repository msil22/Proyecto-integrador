import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; 
import { Link as RouterLink } from 'react-router-dom';


function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 56){
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  };

  window.addEventListener('scroll', changeNav);


  return (
    <>
      <nav className= {navbar ? 'navbar active navbar-expand-lg fixed-top' : 'navbar navbar-expand-lg fixed-top'}>
  <div className="container-fluid">
    <a className="navbar-brand" href={""}><img src="../acaestamoslogo.png" style={{ width: '150px', height: '80px'}} alt="logo"  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to={'acerca-de'} className="nav-link" spy={true} offset={-56} duration={500}>Acerca de</Link>
        </li>
        <li className="nav-item">
          <Link to={'empresas'} className="nav-link"  spy={true} offset={-100} duration={500}>Empresas Colaboradoras</Link>
        </li>
        <li className="nav-item">
          <Link to={'contactus'} className="nav-link"  spy={true} offset={-100} duration={500}>Contáctanos</Link>
        </li>
        <li className="nav-item">
          <RouterLink to={'/inicio-sesion'} className="usuario-button">Ingresar</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
export default Navbar