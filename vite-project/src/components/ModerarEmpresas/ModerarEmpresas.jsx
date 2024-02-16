import React from "react";
import './ModerarEmpresas.css'
import Nabvar from '../navbars/NavbarAdmin.jsx'
import Footer from '../Footer/Footer.jsx'

function ModerarEmpresas() {
    return (
        <>
            <Nabvar />

            <div className="verCV">
                <div className="contenedores">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores-rechazado">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores-aprobado">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores-aprobado">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores-aprobado">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
                <div className="contenedores-aprobado">
                    <p>NOMBREEMPRESANOMBREEMPRESA </p>
                    <button type="button" className="btn btn-success" onclick="openModal('../img/CV.jpg')">Ver</button>
                </div>
            </div>

            <div id="myModalModerarEmpresas" className="modalModerarEmpresas">
                <div className="modal-contentModerarEmpresas">
                    <span className="closeModerarEmpresas" onclick="closeModal()">&times;</span>
                    <img id="modalImageModerarEmpresas" src="" alt="Imagen del modal" />
                </div>
            </div>

            <Footer />

        </>
    )
}

export default ModerarEmpresas