import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from '../views/Home.jsx'
import ModerarEmpresas from '../views/ModerarEmpresas.jsx';
import InicioAdmin from '../views/InicioAdmin.jsx';
import FormularioE from '../views/FormularioE.jsx';
import FormularioU from '../views/FormularioU.jsx';
import AutorizarPUsuario from '../views/AutorizarPUsuario.jsx';
import InicioSesion from '../components/inicioSesion/InicioSesion.jsx';
import PerfilDeEmpresa from '../views/PerfilDeEmpresa.jsx';
import RegularLosPerfiles from '../views/RegularLosPerfiles.jsx';
import PerfilUsuarios from '../views/PerfilUsuarios.jsx';
import Moderar_Empresas_Perfil from '../components/Moderar_Empresas_Perfil/Moderar_Empresas_Perfil.jsx';
import TipoDeEstado from '../views/EstadoUsuario.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "moderar-empresa",
    element: <ModerarEmpresas />
  },
  {
    path: "inicio-sesion/inicio-administrador",
    element: <InicioAdmin />
  },
  {
    path: "formulario-empresa",
    element: <FormularioE />
  },
  {
    path: "formulario-usuario",
    element: <FormularioU />
  },
  {
    path: "autorizar-perfil-usuario",
    element: <AutorizarPUsuario />
  },
  {
    path: "inicio-sesion",
    element: <InicioSesion />
  },
  {
    path:"perfil-empresa",
    element: <PerfilDeEmpresa />
  },
  {
    path:"regular-perfiles",
    element: <RegularLosPerfiles />
  },
  {
    path:"perfil-usuarios",
    element: <PerfilUsuarios />
  },
  {
    path: "moderar-empresas-perfil",
    element: <Moderar_Empresas_Perfil />
  },
  {
    path: "estado-usuario",
    element: <TipoDeEstado />
  },
]);


export default router;