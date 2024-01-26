document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        var imagenPrincipal = document.querySelector('.imagenPrincipal img');
        var offset = imagenPrincipal.offsetHeight; 

        if (window.scrollY > offset) {
            navbar.classList.add('opaco');
        } else {
            navbar.classList.remove('opaco');
        }
    });
});