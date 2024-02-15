//Navbar

const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56){
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56){
        navEl.classList.remove('navbar-scrolled')
    }
})


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