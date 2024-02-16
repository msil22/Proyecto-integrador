import React from 'react'
import Footer from '../components/footer/Footer.jsx'
import Navbar from '../components/navbar/Navbar.jsx'
import About from '../components/About/About.jsx'
import EmpresaL from '../components/Empresas/EmpresaL.jsx'
import EmpresaR from '../components/Empresas/EmpresaR.jsx'
import Background from '../components/Background/Background.jsx'


function Home() {
  return (
    <>
    <Navbar />
    <Background />
    <About />
    <h1 id='conoce' style={{display: 'flex', justifyContent: 'center'}}>Conoce las empresas asociadas</h1>
    <EmpresaL />
    <EmpresaR />
    <EmpresaL />
    <EmpresaR />
    <EmpresaL />
    <EmpresaR />
    <Footer />
    </>
  )
}

export default Home