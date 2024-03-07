import React from 'react'
import FeedUsuario from '../components/feedusuario/FeedUsuario.jsx'
import NavbarTalento from '../components/Navbar/NavbarTalento.jsx'
import Footer from '../components/Footer/Footer.jsx'
import DisponibilidadTab from '../components/tipo-estado-usuario/EstadoUsuario.jsx'
import PerfilUsuario from '../components/perfilUsuario/PerfilUser.jsx'

function FeedUser() {
  return (
    <>
    <NavbarTalento />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <PerfilUsuario />
    <DisponibilidadTab />
    <FeedUsuario />
    <Footer />
    </>

  )
}

export default FeedUser