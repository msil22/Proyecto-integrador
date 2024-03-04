import React from 'react'
import InicioAdministrador from '../components/InicioAdministrador/InicioAdministrador.jsx'
import NavbarAdmin from '../components/Navbar/NavbarAdmin.jsx'
import Footer from '../components/Footer/Footer.jsx'

function InicioAdmin() {
  return (
    <>
    <NavbarAdmin />
    <InicioAdministrador />
    <Footer />
    </>
  )
}

export default InicioAdmin