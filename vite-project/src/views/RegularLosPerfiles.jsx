import React from 'react'
import RegularPerfiles from '../components/regularPerfiles/RegularPerfiles.jsx'
import Navbar from '../components/navbars/NavbarAdmin.jsx'
import Footer from '../components/footer/Footer.jsx'
import Tabla from '../components/tablas/Tabla.jsx'



function RegularLosPerfiles() {
  return (
    <>
    <Navbar />
    <RegularPerfiles />
    <Tabla/>
    <Footer />
    </>
  )
}

export default RegularLosPerfiles