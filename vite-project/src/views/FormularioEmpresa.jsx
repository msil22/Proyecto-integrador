import React from 'react'
import FormularioEmp from '../components/Formularios/FormularioEmp'
import Footer from '../components/Footer/Footer'
import NavbarEmpresa from '../components/Navbar/NavbarEmpresa.jsx'

function FormularioEmpresa() {
  return (
    <div>
      <NavbarEmpresa />
      <FormularioEmp />
      <Footer />
    </div>
  )
}

export default FormularioEmpresa
