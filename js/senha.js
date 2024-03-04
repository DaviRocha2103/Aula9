document.addEventListener('DOMContentLoaded', function () {
    const userInput = document.getElementById('userInput');
    const senhaInput = document.getElementById('senhaInput');
    const confirmBtn = document.querySelector('.confirmBtn a');
    const erroMessage = document.getElementById('Erro');

    confirmBtn.addEventListener('click', function (event) {
        event.preventDefault();
        
        const user = userInput.value;
        const senha = senhaInput.value;

        if (user === 'admin' && senha === 'admin') {
            
            window.location.href = './pages/pokedex.html';
        } else {
            
            erroMessage.style.display = 'Erro';
        }
    });
});