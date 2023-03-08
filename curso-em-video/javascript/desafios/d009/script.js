const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Reajuste Salarial";
title.className = 'title';
app.appendChild(title);

function formatMoney(price){
   const money = price.toLocaleString( "pt-BR" , {style: 'currency', currency: 'BRL'})
   return money
}

function readjustmentCalculation() {
    const customer = window.prompt('Qual é o nome do funcionário?');
    const wage = window.prompt(`Qual é o salário ${customer}`);
    const readjustment = (+window.prompt(`O salário de ${customer} vai ser reajustado em qual porcentagem?`)) 
   
    const wageReplace = wage.replace(",", ".");
    const wageNumber = parseFloat(wageReplace).toFixed(2)
    const increase = +wageNumber * (readjustment / 100);
    const readjustedWage = increase + +wageNumber;
    const increaseFormatted = formatMoney(increase)
    const wageFormatted = formatMoney(+wage);
    const readjustedWageFormatted = formatMoney(+readjustedWage);
    const message = document.querySelector('#message')
    message.innerHTML = `<strong>${customer} recebeu um aumento salarial!!</strong></br> O salário atual era ${wageFormatted}.</br>Com um aumento de ${readjustment}%, o salário vai aumentar ${increaseFormatted} no próximo mês.</br> E a partir daí, ${customer} vai passar a ganhar ${readjustedWageFormatted}.`
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Reajustar Salário'
    button.addEventListener("click", readjustmentCalculation)
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