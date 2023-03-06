const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Calcular Desconto";
title.className = 'title';
app.appendChild(title);

function formatMoney(price){
   const money = price.toLocaleString( "pt-BR" , {style: 'currency', currency: 'BRL'})
   return money
}

function discountCalculation() {
    const product = window.prompt('Qual é o produto que você está comprando?');
    const price = window.prompt(`Qual é o preço de ${product}`)
    const priceReplace = price.replace(",", ".");
    const priceNumber = parseFloat(priceReplace).toFixed(2)
    const discount = (priceNumber * 0.1).toFixed(2)
    const priceWithDiscount = formatMoney(priceNumber - discount)
    const priceFormatted = formatMoney(+priceNumber);
    const discountFormatted = formatMoney(+discount);
    const message = document.querySelector('#message')
    message.innerHTML = `<strong>Calculando desconto de 10% para ${product} </strong></br> O preço original era ${priceFormatted}</br> Você acaba de ganhar ${discountFormatted}</br> No fim, você vai pagar ${priceWithDiscount}`
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Desconto de 10%'
    button.addEventListener("click", discountCalculation)
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