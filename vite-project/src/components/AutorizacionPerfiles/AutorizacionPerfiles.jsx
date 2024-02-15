import React from 'react'
import './AutorizacionPerfiles.css'
import Footer from '../Footer/Footer.jsx'

function AutorizacionPerfiles() {
  return (
    <>
    <div className="container text-center">
        <p>Ha autorizado este perfil con éxito</p>
        <form action="/submit_form" method="post">
            <input type="submit" value="Volver"/>
        </form>
    </div>
    <Footer />
    </>
  )
}

export default AutorizacionPerfiles