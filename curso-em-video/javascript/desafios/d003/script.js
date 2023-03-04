const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Boas-vindas";
title.className = 'title';
app.appendChild(title);

function search() {
    const name = window.prompt('Qual é o seu nome? ');
    const age = window.prompt(`Olá ${name}! Quantos anos você tem?`)
    const message = `Acabei de conhecer ${name}, que tem ${age} anos de idade!`
    window.alert(message);
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Inicie o desafio'
    button.addEventListener("click", search)
    return button;
}
const divButton = document.createElement('div');
divButton.classList = 'divButton';
divButton.appendChild(startChallenge());
app.appendChild(divButton); 