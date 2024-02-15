import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from'./Footer/Footer.jsx'
import Navbar from './navbars/Navbar.jsx'
import Moderar_Empresas_Perfil from './Moderar_Empresas_Perfil/Moderar_Empresas_Perfil.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Moderar_Empresas_Perfil/>
    
 
    <Footer/>
  </React.StrictMode>,
)
