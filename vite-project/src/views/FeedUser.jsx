import React from 'react'
import FeedUsuario from '../components/feedusuario/FeedUsuario.jsx'
import NavbarTalento from '../components/Navbar/NavbarTalento.jsx'
import Footer from '../components/Footer/Footer.jsx'
import DisponibilidadTab from '../components/tipo-estado-usuario/EstadoUsuario.jsx'

function FeedUser() {
  return (
    <>
    <NavbarTalento />
    <DisponibilidadTab />
    <FeedUsuario />
    <Footer />
    </>

  )
}

export default FeedUser