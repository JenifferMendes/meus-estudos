const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Desafio das Mensagens";
title.className = 'title';
app.appendChild(title);

function createButton(num){
    const buttonOne = document.createElement('div');
    buttonOne.innerHTML = "Botão " + num;
    buttonOne.className = 'button';
    buttonOne.addEventListener("click",() => {
        const message = `Você clicou no botão ${num}`
        window.alert(message);
    })
    return buttonOne;
}

const divButton = document.createElement('div');
divButton.classList = 'divButton';
divButton.appendChild(createButton(1));
divButton.appendChild(createButton(2));
divButton.appendChild(createButton(3));
app.appendChild(divButton); 