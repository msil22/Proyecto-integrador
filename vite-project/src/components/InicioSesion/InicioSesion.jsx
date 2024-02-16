import React from "react";
import './InicioSesion.css'
import Footer from "../Footer/Footer.jsx";
import NavbarMain from "../navbars/NavbarMain.jsx";

function InicioSesion() {
    return (
        <>
            <NavbarMain />

            <body id="fondo2">
                <main>
                    <div class="cuadrado">
                        <div class="registro-flotante">
                            <h2>Inicia sesión</h2>
                            <form action="#">
                                <label for="correo">Correo electrónico:</label>
                                <input type="email" id="correo" name="correo" required />
                                <label for="correo">Contraseña:</label>
                                <input type="contraseña" id="contraseña" name="contraseña" required />
                                <button type="submit">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </main>
            </body>

            <Footer />
        </>
    )
}

export default InicioSesion