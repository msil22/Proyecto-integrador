import React, { useEffect, useState} from 'react';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll'; 


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
    <a className="navbar-brand" href="#"><img src="/acaestamoslogo.png" alt="logo" height={130} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to='acerca-de' className="nav-link" spy={true} offset={-56} duration={500}>Acerca de</Link>
        </li>
        <li className="nav-item">
          <Link to='empresas' className="nav-link"  spy={true} offset={-100} duration={500}>Empresas Colaboradoras</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="usuario-button" spy={true} offset={50} duration={500}>Ingresar</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}



// function Navbar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   const closeMenu = () => setClick(false)


//   return (
//     <>
//     <div className='header-nav'>
//       <nav className='navbar'>
//         <Link to='/' className='logo-ae'><img src="/acaestamoslogo.png" alt="" width={200} /></Link>
//         <div className='hamburguer' onClick={handleClick}>
//           {click ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className="nav-item">
//             <Link to='/' className="nav-link" id='empresas' spy={true} offset={50} duration={500} onClick={closeMenu}>Empresas Colaboradoras</Link>
//           </li>
//           <li className="nav-item">
//             <Link to='about' className="nav-link" spy={true} offset={-56} duration={500} >Acerca de</Link>
//           </li>
//           <li className="nav-item">
//             <Link to='/' className="usuario-button" spy={true} offset={50} duration={500} >Ingresar</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//     </>
//   )
// }

export default Navbar