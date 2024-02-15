import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import Footer from'./Footer/Footer.jsx'
import Navbar from './navbars/Navbar.jsx'
import Moderar_Empresas_Perfil from './Moderar_Empresas_Perfil/Moderar_Empresas_Perfil.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Moderar_Empresas_Perfil/>
    
 
    <Footer/>
=======
import Footer from './components/Footer/Footer.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import AutorizacionPerfiles from './components/AutorizacionPerfiles/AutorizacionPerfiles.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Footer />
  },
  {
    path: "app",
    element: <App />
  },
  {
    path: "autorizacionPerfiles",
    element: <AutorizacionPerfiles />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
>>>>>>> 5baba39cae73871520777c4f218f234f0423c62c
  </React.StrictMode>,
)
