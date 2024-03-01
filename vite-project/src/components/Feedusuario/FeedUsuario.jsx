import React from 'react'
import './feedusuario.css'



function FeedUsuario() {
  return (
    <>
    <main>
    <section className="container" id="mmm">
      <div className="row mt-5">
        <div className="col-md-8">
          <h2>¡Bienvenido a Acá Estamos!</h2>
          <p>Hola, <strong>Nombre de usuario</strong>. Te has conectado exitosamente a la plataforma.</p>
          <p>¿Qué deseas hacer hoy?</p>
          <ul className="list-unstyled">
            <li><a href="#">Ver empresas colaboradoras</a></li>
            <li><a href="#">Subir mi CV</a></li>
            <li><a href="#">Gestionar mis postulaciones</a></li>
            <li><a href="#">Ver mis ofertas guardadas</a></li>
            <li><a href="#">Contactar con atención al cliente</a></li>
          </ul>
        </div>
        </div>
    </section>
    <div className="grr">
        <div className="col-md-4">
          <div className="cardi">
            <div className="card-header">
              <h3>Consejos para tu búsqueda</h3>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>Completa tu perfil al 100% para aumentar tus posibilidades de ser encontrado por las empresas.</li>
                <li>Activa las alertas de empleo para recibir notificaciones cuando se publiquen ofertas que coincidan con tu perfil.</li>
                <li>Personaliza tu CV para cada oferta de empleo a la que te postules.</li>
                <li>Prepárate para las entrevistas de trabajo practicando con preguntas comunes.</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        </main>
    <div id="consejos">
        <div className="card">
            <div className="imagen1"></div>
             <div className="content">
               <a href="#">
                 <span className="title">
                   Como tener una entrevista online exitosa:
                 </span>
               </a>
           
               <p className="desc">
                Investigue la empresa y el cargo a fondo. Practique respuestas a preguntas comunes. Llegue puntual y con una actitud positiva.
               </p>
             </div>
           </div>
           <div className="card">
            <div className="imagen2"></div>
             <div className="content">
               <a href="#">
                 <span className="title">
                    Escucha atentamente la pregunta completa antes de responder.
                 </span>
               </a>
           
               <p className="desc">
                Asegúrate de comprender lo que se te pregunta antes de comenzar a responder.
Toma tu tiempo para pensar en una respuesta completa y concisa
               </p>
           
              
             </div>
           </div>
           <div className="card">
            <div className="imagen3"></div>
             <div className="content">
               <a href="#">
                 <span className="title">
                   ¿Qué responder si preguntan por mis debilidades?
                 </span>
               </a>
           
               <p className="desc">
                El modo de prepararse para esta pregunta es identificar las debilidades que comunican fuerza. Diga cosas como: Me enfoco mucho en los detalles. 
               </p>
             </div>
           </div>
        </div>
    </>
  )
}

export default FeedUsuario