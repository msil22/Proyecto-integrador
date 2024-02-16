import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer/Footer.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import AutorizacionPerfiles from './components/AutorizacionPerfiles/AutorizacionPerfiles.jsx'
import Moderar_Empresas_Perfil from './components/Moderar_Empresas_Perfil/Moderar_Empresas_Perfil.jsx'



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
  },
  {
    path: "moderar_empresas_perfil",
    element: <Moderar_Empresas_Perfil />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
