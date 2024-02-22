import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Background from '../components/Background/Background'
import About from '../components/About/About'
import Cursos from '../components/Cursos/Cursos'
import PerfilEmpresa from '../components/Perfil/Perfil-empresa'
import RevisarCurriculum from '../components/Curriculum/Revisar-curriculum'

function Home() {
  return (
    <>
    <Navbar />
    <About />
    <Cursos />
    <RevisarCurriculum />
    </>
  )
}

export default Home
