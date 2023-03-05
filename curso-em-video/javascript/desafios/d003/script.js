const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Antes e depois";
title.className = 'title';
app.appendChild(title);

function previousAndNextNumber() {
    const num = +window.prompt('Digite um número inteiro qualquer: ');
    const previous = num - 1
    const next = num + 1
    const message = `Antes de ${num}, temos o número ${previous}.\nDepois de ${num}, temos o número ${next}.`
    window.alert(message);
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Antecessor e Sucessor'
    button.addEventListener("click", previousAndNextNumber)
    return button;
}
const divButton = document.createElement('div');
divButton.classList = 'divButton';
divButton.appendChild(startChallenge());
app.appendChild(divButton); 