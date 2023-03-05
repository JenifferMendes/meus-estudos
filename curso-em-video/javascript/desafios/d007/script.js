const priceDollar = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?');

const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Conversor R$ -> US$";
title.className = 'title';
app.appendChild(title);

function measurementConverter() {
    const price = parseFloat(priceDollar.replace(",","."))
    const real = +window.prompt();
    const temperatureF = 1.8 * parseFloat(temperature) + 32;
    const message = document.querySelector('#message')
    message.innerHTML = `<strong>A temperatura de ${priceDollar.replace(".", ",")}°C, corresponde a...</strong></br>${temperatureK}K (Kelvin) </br> ${temperatureF}°F `
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Converter'
    button.addEventListener("click", measurementConverter)
    return button;
}

const divButton = document.createElement('div');
divButton.classList = 'divButton';
const message = document.createElement('div');
message.innerHTML = 'Clique no botão acima para iniciar.'
message.className = 'message'
message.id = 'message'
divButton.appendChild(startChallenge());
app.appendChild(divButton); 
app.appendChild(message);