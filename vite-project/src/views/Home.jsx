import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Background from '../components/Background/Background.jsx'
import About from '../components/About/About.jsx'
import Empresas from '../components/Empresas/Empresas.jsx'
import Cursos from '../components/Cursos/Cursos.jsx'
import Footer from '../components/Footer/Footer.jsx'
import ContactUs from '../components/Contact/ContactUs.jsx'


function Home() {
  return (
    <>
    <Navbar />
    <Background />
    <About />
    <Empresas />
    <Cursos />
    <ContactUs />
    <Footer />
    </>
  )
}

export default Home