const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Conversor de Medidas";
title.className = 'title';
app.appendChild(title);

function measurementConverter() {
    const distance = +window.prompt('Digite uma distância em metros(m):');
    const distanceKm = distance / 1000;
    const distanceHm = distance / 100;
    const distanceDam = distance / 10;
    const distanceDm = distance * 10;
    const distanceCm = distance * 100;
    const distanceMm = distance * 1000;
    const message = document.querySelector('#message')
    message.innerHTML = `<strong>A distância de ${distance} metros, corresponde a...</strong></br>${distanceKm} (Km) </br> ${distanceHm} (Hm) </br> ${distanceDam} (Dam) </br> ${distanceDm} (dm) </br> ${distanceCm} (cm) </br> ${distanceMm} (mm)`
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