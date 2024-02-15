import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <>
  <Link to={"app"}>Ir a app</Link>
  <div class="contenedor-fila">
	<div class="bloque naranjo"></div>
	<div class="bloque amarillo"></div>
	<div class="bloque verde"></div>
	<div class="bloque verdoso"></div>
	<div class="bloque aqua"></div>
	<div class="bloque azul"></div>
</div>
<footer>
	<div>
		<img src="../Escudo_Renca.png" alt="escudo" class="escudo"/>
	</div>
	<div class="contactanos">
		<a href="">
			<i class="fa-solid fa-location-dot"></i>
		</a>
		<a href="">
			<i class="fa-solid fa-phone"></i>
		</a>
		<a href="">
			<i class="fa-solid fa-envelope"></i>
		</a>
	</div>
	<div class="contactanosTXT">
		<p class="numContacto">Blanco Encalada Nº 1335, Plaza de Renca, Renca</p>
		<p class="numContacto">+56 2 2685 6600</p>
		<p class="numContacto">contacto@renca.cl</p>
	</div>
	<div class="redes">
		<p id="encuentranos">Encuéntranos</p>
		<a href="">
			<i class="fa-brands fa-youtube"></i>
		</a>
		<a href="">
			<i class="fa-brands fa-instagram"></i>
		</a>
		<a href="">
			<i class="fa-brands fa-facebook"></i>
		</a>
	</div>
</footer>
<div class="derechos">
	<p>© Acá Estamos / Ilustre Municipalidad de Renca / Todos los derechos reservados.</p>
</div>
<div/>
  </>
  )
}

export default Footer