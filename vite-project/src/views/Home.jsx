import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Background from '../components/Background/Background'
import About from '../components/About/About'
import Cursos from '../components/Cursos/Cursos'

import Empresas from '../components/Empresas/Empresas'

function Home() {
  return (
    <>
    <Navbar />
    <Background />
    <About />
    <Empresas />
    <Cursos />

    </>
  )
}

export default Home
