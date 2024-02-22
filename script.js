document.getElementById('btn-sim').addEventListener('click', function() {
    confetti();
    displayMessage('Valeu Prof');
});

document.getElementById('btn-nao').addEventListener('click', function() {
    displayMessage('Oh, que pena, não quer pensar melhor?');
});

function displayMessage(msg) {
    document.getElementById('message').textContent = msg;
}

function confetti() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0']; // Adicionando cores diferentes
    const confettiWrapper = document.getElementById('confetti-wrapper');
    const numConfettis = 100; // Alterado para 100 confettis

    for (let i = 0; i < numConfettis; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Escolhendo aleatoriamente uma cor da matriz de cores
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confettiWrapper.appendChild(confetti);
    }
}