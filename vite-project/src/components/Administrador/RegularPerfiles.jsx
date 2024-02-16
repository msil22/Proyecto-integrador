import React from 'react'
import './RegularPerfiles.css'
// import { useRef, useState, useEffect } from 'react';

// const RegularPerfiles = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const modalRef = useRef(null);

//   const openModal = (imageSrc) => {
//     setModalIsOpen(true);

//     // Establece la fuente de la imagen del modal
//     if (modalRef.current) {
//       modalRef.current.src = imageSrc;
//     }
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   // Cierra el modal si se hace clic fuera de él
//   const handleWindowClick = (event) => {
//     if (modalRef.current && modalRef.current.contains(event.target)) {
//       closeModal();
//     }
//   };

//   // Agrega un efecto secundario para manejar el evento click en el window
//   useEffect(() => {
//     window.addEventListener('click', handleWindowClick);

//     // Limpia el efecto secundario al desmontar el componente
//     return () => {
//       window.removeEventListener('click', handleWindowClick);
//     };
//   }, []); // Asegúrate de que este efecto secundario se ejecute solo una vez durante el montaje y desmontaje

//   return (
//     <div className='perfil-revisar'>
//       <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
//       <button type="button" className="btn btn-info" onClick={() => openModal('/close-up.jpg')}>Ver CV</button>

//       {modalIsOpen && (
//         <div id="myModal" className="modal" ref={modalRef}>
//           <span className="close" onClick={closeModal}>&times;</span>
//           <img className="modal-content" alt="CV" />
//         </div>
//       )}
//     </div>
//   );
// };


function RegularPerfiles() {
  return (
    <>
        <div className='container-fluid'>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick="{() => openModal('../img/CV.jpg')}">Ver CV</button>
            </div>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick="{() => openModal('../img/CV.jpg')}">Ver CV</button>
            </div>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick="{() => openModal('../img/CV.jpg')}">Ver CV</button>
            </div>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick={() => openModal('/business.jpg')}>Ver CV</button>
            </div>
            <div className='perfil-aceptado'>
                <p>Nombre Apellido | Fecha de Registro | <b> Perfil Aceptado </b></p>
                <button type="button" class="btn btn-info" onClick="{() => openModal('../img/CV.jpg')}">Ver CV</button>
            </div>
            <div className='perfil-rechazado'>
                <p>Nombre Apellido | Fecha de Registro | <b> Perfil Rechazado </b></p>
                <button type="button" class="btn btn-info" onClick="{() => openModal('../img/CV.jpg')}">Ver CV</button>
            </div>
        </div>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span className="close" onClick="closeModal()">&times;</span>
                <img id="modalImage" src="" alt="Imagen del modal"/>
            </div>
        </div>
    </>
  )
}

export default RegularPerfiles
