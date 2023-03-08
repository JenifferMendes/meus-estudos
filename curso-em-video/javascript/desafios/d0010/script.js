const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Resolvendo Bhaskara";
title.className = 'title';
app.appendChild(title);

function bhaskaraCalculation() {
    const aValue = +window.prompt('Qual é o valor de a?');
    const bValue = +window.prompt(`Qual é o valor de b?`);
    const cValue = +window.prompt('Qual é o valor de c?');
    const delta = ((bValue) ** 2) - (4 * aValue * cValue);
    const denominator = 2 * aValue
    const x1 = ((-bValue - (delta ** 0.5)) / denominator).toFixed(2);
    const x2 = ((-bValue + (delta ** 0.5)) / denominator).toFixed(2);
       
    const message = document.querySelector('#message')
    message.innerHTML = `<strong>Resolvendo Bhaskara</strong></br> A equação atual é <strong>${aValue}x² + ${bValue}x + 2 = 0</strong></br>O cálculo realizado será <strong>∆ = ${bValue} - 4.${aValue}.${cValue}</strong></br>O valor calculado foi <mark><strong>∆ = ${delta}</strong></mark></br>Valor para <strong>x' = ${x1}</strong></br>Valor para <strong>x'' = ${x2}</strong>`
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Calcular'
    button.addEventListener("click", bhaskaraCalculation)
    return button;
}

const divButton = document.createElement('div');
divButton.classList = 'divButton';
const message = document.createElement('div');
message.innerHTML = 'Considerando uma equação no formato <strong>a</strong>x²+ <strong>b</strong>x + <strong>c</strong> = 0'
message.className = 'message'
message.id = 'message'
divButton.appendChild(startChallenge());
app.appendChild(divButton); 
app.appendChild(message);