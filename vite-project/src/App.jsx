import react from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import About from './components/About/About'
import PerfilEmpresa from './components/Perfil/Perfil-empresa'
import PerfilUsuario from './components/Perfil/Perfil-usuario'
import RegularPerfiles from './components/Administrador/RegularPerfiles'
import Cursos from './components/Cursos/Cursos'




function App(){
  return (
    <>
    <Navbar />
    <Background />
    <About/>
    <Cursos />
    </>
  )
}

export default App
