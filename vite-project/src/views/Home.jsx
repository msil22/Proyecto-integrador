import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Background from '../components/Background/Background.jsx'
import About from '../components/About/About.jsx'
import Empresas from '../components/Empresas/Empresas.jsx'
import Cursos from '../components/Cursos/Cursos.jsx'
import Footer from '../components/Footer/Footer.jsx'


function Home() {
  return (
    <>
    <Navbar />
    <Background />
    <About />
    <Empresas />
    <Cursos />
    <Footer />
    </>
  )
}

export default Home