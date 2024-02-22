import react from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import About from './components/About/About'
import PerfilEmpresa from './components/Perfil/Perfil-empresa'
import PerfilUsuario from './components/Perfil/Perfil-usuario'
import RegularPerfiles from './components/Administrador/RegularPerfiles'




function App(){
  return (
    <>
    <Navbar />
    <Background />
    <About/>
    </>
  )
}

export default App
