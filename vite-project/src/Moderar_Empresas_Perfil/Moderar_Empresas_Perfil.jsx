import React from "react";
import './Moderar_Empresas_Perfil.css'
import './Moderar_Empresas_Perfil.js'




//ChatBox

function toggleChat() {
    var chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
  }
  
  function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    var chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML += '<p>Usuario: ' + userInput + '</p>';
    document.getElementById('userInput').value = ''; // Limpiar el campo de entrada
  }





function Moderar_Empresas_Perfil() {
    return (
        <>

            {/*Navbar*/}
            <nav className="navbar custom-bg-color navbar-expand-md fixed-top navbar-scrolled" data-bs-theme="dark">
                <div className="container-fluid">
                    {/*  <!-- logo renca--> */}
                    <a className="navbar-brand" href="../index.html">
                        <img src="../Renca_logo.png" alt="" width="100" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                        aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
                            <li className="nav-item">
                                <a href="../index.html" className="nav-link active"><img src="../Aca_estamos_logo.png" alt=""
                                    height="100"/></a>
                            </li>
                        </ul>
                    </div>

                    {/*   <!-- Perfil Dropdown --> */}
                    <li className="nav-item dropdown" id="lista">
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="perfil"><i className="bi bi-person-circle"></i></a>
                        <ul className="dropdown-menu bg-secondary">
                            <li><a className="dropdown-item" href="">Mi Perfil</a></li>
                            <li><a className="dropdown-item" href="">Mi CV</a></li>
                            <li><a className="dropdown-item" href="">Mis Postulaciones</a></li>
                            <li><a className="dropdown-item" href="">Mis Ofertas Guardadas</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="../index.html">Cerrar Sesión</a></li>
                        </ul>
                    </li>
                </div>
            </nav>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

             {/* <!--Contenido-->  */}
            <div className="card tarjetaEmpresa">
                <img className="card-img-top imagenTarjetaEmpresa" src="../company-svgrepo-com.svg" alt="Card image cap" />
                <div className="card-body cuerpoTarjetaEmpresa">
                    <div className="text-section">
                        <h5 className="card-title">Razon social</h5>
                        <p className="card-text">Nombre de la empresa: </p>
                        <p className="card-text">RUT: </p>
                        <p className="card-text">Direccion: </p>
                        <p className="card-text">Rubro o Giro: </p>
                        <p className="card-text">Cantidad de empleados: </p>
                    </div>
                    <div className="cta-section">
                        <div><i className="fa-solid fa-square-pen"></i></div>
                    </div>
                </div>
            </div>

            <h1 className="postulacionesAbiertas">Postulaciones abiertas</h1>

            <div className="container">
                <div className="row">
                    <div><br /><br /><br /></div>
                    <div><br /></div>

                    <div><br /></div>

                    <div className="card"  >

                        <h1>Cargo</h1>

                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <h2>Area</h2>
                                <h2>Full time</h2>
                                <p ><i className="fa-solid fa-calendar-days"></i>
                                    Publicada 01/01/2024</p>

                                <div className="position-absolute top-0 end-0" >
                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Requisitos: </h5>
                                            <ul>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Funciones: </h5>
                                            <ul>
                                                <li>Función</li>
                                                <li>Función</li>
                                                <li>Función</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <br />

                                <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion
                                </h4>
                            </blockquote>
                        </div>
                    </div>

                    <div><br /></div>

                    <div className="card" >

                        <h1>Cargo</h1>

                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <h2>Area</h2>
                                <h2>Full time</h2>
                                <p ><i className="fa-solid fa-calendar-days"></i>
                                    Publicada 01/01/2024</p>

                                <div className="position-absolute top-0 end-0 " >
                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Requisitos: </h5>
                                            <ul>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Funciones: </h5>
                                            <ul>
                                                <li>Función</li>
                                                <li>Función</li>
                                                <li>Función</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <br />

                                <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion
                                </h4>
                            </blockquote>
                        </div>
                    </div>

                    <div><br /></div>

                    <div className="card" >

                        <h1>Cargo</h1>

                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <h2>Area</h2>
                                <h2>Full time</h2>
                                <p ><i className="fa-solid fa-calendar-days"></i>
                                    Publicada 01/01/2024</p>

                                <div className="position-absolute top-0 end-0" >
                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Requisitos: </h5>
                                            <ul>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Funciones: </h5>
                                            <ul>
                                                <li>Función</li>
                                                <li>Función</li>
                                                <li>Función</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />

                                <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion
                                </h4>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div> 

            {/* <!-- Botón de chat -->  */}
            <button id="chatButton" onclick="toggleChat()">Chat</button>

            {/* <!-- Cuadro de chat simulado -->  */}
            <div id="chatBox" className="chat-box">
                <div id="chatHeader" className="chat-header">
                    <span id="closeChat" onclick="toggleChat()">&times;</span>
                    <h2>Chat con el Administrador</h2>
                </div>
                <div id="chatMessages" className="chat-messages">
                    {/* <!-- Aquí puedes mostrar mensajes simulados -->  */}
                    <p>Administrador: ¡Hola! ¿En qué puedo ayudarte?</p>
                </div>
                <input type="text" id="userInput" placeholder="Escribe tu mensaje..." />
                <button onclick="sendMessage()">Enviar</button>
            </div>

            {/* <!--Footer-->  */}
            <div className="contenedor-fila">
                <div className="bloque naranjo"></div>
                <div className="bloque amarillo"></div>
                <div className="bloque verde"></div>
                <div className="bloque verdoso"></div>
                <div className="bloque aqua"></div>
                <div className="bloque azul"></div>
            </div>
            <footer>
                <div>
                    <img src="Escudo_Renca.png" alt="escudo" className="escudo" />
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.718185307366!2d-70.7067472879191!3d-33.40451579505184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c6a592ba9671%3A0xa769a671ce1c6268!2sIlustre%20Municipalidad%20de%20Renca!5e0!3m2!1ses!2scl!4v1706731664581!5m2!1ses!2scl"
                    width="268" height="197"  allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="contactanos">
                    <a href="">
                        <i className="fa-solid fa-location-dot"></i>
                    </a>
                    <a href="">
                        <i className="fa-solid fa-phone"></i>
                    </a>
                    <a href="">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
                <div className="contactanosTXT">
                    <p className="numContacto">Blanco Encalada Nº 1335, Plaza de Renca, Renca</p>
                    <p className="numContacto">+56 2 2685 6600</p>
                    <p className="numContacto">contacto@renca.cl</p>
                </div>
                <div className="redes">
                    <p id="encuentranos">Encuéntranos</p>
                    <a href="">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </div>
            </footer>
            <div className="derechos">
                <p>© Acá Estamos / Ilustre Municipalidad de Renca / Todos los derechos reservados.</p>
            </div>
            {/* </div>  */}

        </>
        
    )
}

export default Moderar_Empresas_Perfil