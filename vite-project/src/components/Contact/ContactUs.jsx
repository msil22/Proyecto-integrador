import React, {useRef} from 'react'
import './ContactUs.css'
import emailjs from '@emailjs/browser'

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ne4f5jp', 'template_hag9zxl', form.current, {
          publicKey: 'x6lc0YC2HCgE07LW-',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div className='formulario-contacto' id='contactus'>
        <h2>¿Tienes alguna duda? <br/> ¡Contáctanos!</h2>
        <form ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type="text" name="user_name" />
            <label>Correo</label>
            <input type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea name="message" />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default ContactUs
