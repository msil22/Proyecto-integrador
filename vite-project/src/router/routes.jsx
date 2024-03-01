import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from '../views/Home.jsx'
import InicioSesion from '../views/InicioSesion.jsx'
import RegistroTalento from '../views/RegistroTalento.jsx';
import FormularioTalento from '../views/FormularioTalento.jsx';
import RegistroEmpresa from '../views/RegistroEmpresa.jsx';
import FormularioEmpresa from '../views/FormularioEmpresa.jsx';
import PerfilEmpresa from '../views/PerfilEmpresa.jsx';



const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: '/inicio-sesion', element: <InicioSesion />},
  {path: '/registro-talento', element: <RegistroTalento />},
  {path: '/formulario-talento', element: <FormularioTalento />},
  {path: '/registro-empresa', element: <RegistroEmpresa />},
  {path: '/formulario-empresa', element: <FormularioEmpresa />},
  {path: '/perfil-empresa', element: <PerfilEmpresa />}
  // {
  //   path: "moderar-empresa",
  //   element: <ModerarEmpresas />
  // },
  // {
  //   path: "inicio-sesion/inicio-administrador",
  //   element: <InicioAdmin />
  // },
  // {
  //   path: "formulario-empresa",
  //   element: <FormularioE />
  // },
  // {
  //   path: "formulario-usuario",
  //   element: <FormularioU />
  // },
  // {
  //   path: "autorizar-perfil-usuario",
  //   element: <AutorizarPUsuario />
  // },
  // {
  //   path: "inicio-sesion",
  //   element: <InicioSesion />
  // },
  // {
  //   path:"perfil-empresa",
  //   element: <PerfilDeEmpresa />
  // },
  // {
  //   path:"regular-perfiles",
  //   element: <RegularLosPerfiles />
  // },
  // {
  //   path:"perfil-usuarios",
  //   element: <PerfilUsuarios />
  // },
  // {
  //   path: "moderar-empresas-perfil",
  //   element: <Moderar_Empresas_Perfil />
  // },
  // {
  //   path: "estado-usuario",
  //   element: <TipoDeEstado />
  // },
]);


export default router;