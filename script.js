const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56){
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56){
        navEl.classList.remove('navbar-scrolled')
    }
})



document.addEventListener('DOMContentLoaded', function () {
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    const body = document.body;

    // Verifica si hay una preferencia almacenada en localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Aplica el modo oscuro si está habilitado
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    // Cambia el modo oscuro al hacer clic en el botón
    toggleDarkModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        
        // Guarda la preferencia en localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});



function openModal(imageSrc) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');

  // Establece la fuente de la imagen del modal
  modalImage.src = imageSrc;

  // Muestra el modal
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('myModal');
  // Oculta el modal
  modal.style.display = 'none';
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};