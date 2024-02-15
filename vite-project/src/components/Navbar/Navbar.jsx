import React, { useState} from 'react';
import './Navbar.css';

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
    <nav className={navbar ? 'navbar active navbar-expand-md fixed-top' : 'navbar navbar-expand-md fixed-top'}>
        <div className="container-fluid">

            <a className="navbar-brand" href="#">
              <img src='./Renca_B&W.png' height="50" />
            </a>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
                    <li className="nav-item">
                        <a href="#" className="nav-link active"><img src="./acaestamoslogo.png" alt="" height="100"/></a>
                    </li>
                </ul>
            </div>
            <div>
              <a href="#" className="usuario-button" >Ingresar</a>
            </div>
        </div>
    </nav>
  </>
  )
}

export default Navbar