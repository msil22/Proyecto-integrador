import React from 'react'
import './FormularioUser.css'
import { Link } from 'react-router-dom'

function FormularioUser() {
  return (
    <>
    <div className="fregistro">
        <p>Formulario de registro</p>
    </div>
    <div id="formulario-container">
        <div className="mb-3" id="primerFormulario">
            <label for="formGroupExampleInput" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Juan Perez"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Rut</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="11.111.111-1"/>
        </div>
        <div id="">
            <label for="formGroupExampleInput" className="form-label">Estado civil</label>
            <select className="form-select form-select-mb-3">
                <option selected>Seleccione una opción</option>
                <option value="1">Soltero/a</option>
                <option value="2">Casado/a</option>
                <option value="3">Viudo/a</option>
                <option value="3">Divorciado/a</option>
                <option value="3">Unión civil</option>
            </select>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Fecha de nacimiento</label>
            <input type="Date" className="form-control" id="formGroupExampleInput4" placeholder="Seleccione"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Edad</label>
            <input type="text" className="form-control" id="formGroupExampleInput5" placeholder=""/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Celular</label>
            <input type="text" className="form-control" id="formGroupExampleInput6" placeholder="+569 1234 5678"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Correo</label>
            <input type="text" className="form-control" id="formGroupExampleInput7" placeholder="Ejemplo@gmail.com"/>
        </div>
        <div className="container mt-5">
            <label for="formGroupExampleInput2" className="form-label">Certificado de estudios</label>
            <form action="#" method="post" enctype="multipart/form-data">
                <div className="input-group">
                    <input type="file" className="form-control" id="fileInput" name="fileInput" aria-describedby="uploadButton"/>
                    <button className="btn btn-primary" type="submit" id="uploadButton">Subir Archivo</button>
                </div>
            </form>
        </div>
        <div className="container mt-5">
            <label for="formGroupExampleInput2" className="form-label">Certificado de cursos</label>
            <form action="#" method="post" enctype="multipart/form-data">
                <div className="input-group">
                    <input type="file" className="form-control" id="fileInput" name="fileInput" aria-describedby="uploadButton"/>
                    <button className="btn btn-primary" type="submit" id="uploadButton">Subir Archivo</button>
                </div>
            </form>
        </div>
        <div className="container mt-5">
            <label for="formGroupExampleInput2" className="form-label">Certificado de antecedentes</label>
            <form action="#" method="post" enctype="multipart/form-data">
                <div className="input-group">
                    <input type="file" className="form-control" id="fileInput" name="fileInput" aria-describedby="uploadButton"/>
                    <button className="btn btn-primary" type="submit" id="uploadButton">Subir Archivo</button>
                </div>
            </form>
        </div>
        <div className="container mt-5">
            <label for="formGroupExampleInput2" className="form-label">Currículum</label>
            <form action="#" method="post" enctype="multipart/form-data">
                <div className="input-group">
                    <input type="file" className="form-control" id="fileInput" name="fileInput" aria-describedby="uploadButton"/>
                    <button className="btn btn-primary" type="submit" id="uploadButton">Subir Archivo</button>
                </div>
            </form>
        </div>

        <div className="d-flex justify-content-end" id="Benviar">
            <Link to="/perfil-usuarios"><button id="miBoton">Enviar</button></Link>
        </div>
    </div>
    </>
  )
}

export default FormularioUser