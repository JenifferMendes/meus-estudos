const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = 'Ano Bissexto';
title.className = 'title';
app.appendChild(title);

const notLeapYear = document.createElement('div')
notLeapYear.className = 'notLeapYear'
notLeapYear.innerHTML = 'NÃO É BISSEXTO ❌'


const leapYear = document.createElement('div')
leapYear.className = 'LeapYear'
leapYear.innerHTML = 'É BISSEXTO ✔️'

function leapYearVerification() {
    const year = +window.prompt('Qual é o ano que você quer verificar ?');
    const message = document.querySelector('#message');
    message.innerHTML = `<h3><strong>Analisando o ano de ${year}</strong></h3></br> O ano de ${year}`;
    if (year % 4 === 0){
        message.appendChild(leapYear);
    } else {
        message.appendChild(notLeapYear);
    }
}
function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Verificar'
    button.addEventListener("click", leapYearVerification)
    return button;
} 

const divButton = document.createElement('div');
divButton.classList = 'divButton';
const message = document.createElement('div');
message.innerHTML = 'Informe um ano para saber se ele é bissexto'
message.className = 'message'
message.id = 'message'
divButton.appendChild(startChallenge());
app.appendChild(divButton); 
app.appendChild(message);