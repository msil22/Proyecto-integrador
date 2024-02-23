import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Background from '../components/Background/Background'
import About from '../components/About/About'
import Cursos from '../components/Cursos/Cursos'
import PerfilEmpresa from '../components/Perfil/Perfil-empresa'
import RevisarCurriculum from '../components/Curriculum/Revisar-curriculum'
import Tabla from '../components/Tabla/Tabla'

function Home() {
  return (
    <>
    <Navbar />
    <Background />
    <About />
    <Cursos />
    <Tabla />
    </>
  )
}

export default Home
