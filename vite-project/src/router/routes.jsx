import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home.jsx';
import InicioSesion from '../views/InicioSesion.jsx';
import RegistroTalento from '../views/RegistroTalento.jsx';
import FormularioTalento from '../views/FormularioTalento.jsx';
import RegistroEmpresa from '../views/RegistroEmpresa.jsx';
import FormularioEmpresa from '../views/FormularioEmpresa.jsx';
import PerfilEmpresa from '../views/PerfilEmpresa.jsx';
import FeedUser from '../views/FeedUser.jsx';
import InicioAdmin from '../views/InicioAdmin.jsx';
import RegularLosPerfiles from '../views/RegularLosPerfiles.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/inicio-sesion" element={<InicioSesion />} />
    <Route path="/registro-talento" element={<RegistroTalento />} />
    <Route path="/formulario-talento" element={<FormularioTalento />} />
    <Route path="/registro-empresa" element={<RegistroEmpresa />} />
    <Route path="/formulario-empresa" element={<FormularioEmpresa />} />
    <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
    <Route path="/feed-usuario" element={<FeedUser />} />
    <Route path="/inicio-administrador" element={<InicioAdmin />} />
    <Route path="/regular-perfiles" element={<RegularLosPerfiles />} />
  </Routes>
);

export default AppRoutes;