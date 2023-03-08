const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = 'Preço mudou';
title.className = 'title';
app.appendChild(title);

function formatMoney(price){
    const money = price.toLocaleString( "pt-BR" , {style: 'currency', currency: 'BRL'})
    return money
}

function porcentageVerification(previousPrice, currentPrice) {
    if (currentPrice > previousPrice) {
        const porcentagePricePositive = (((currentPrice / previousPrice) - 1) * 100).toFixed(2)
        return porcentagePricePositive
    } else {
        const porcentagePriceNegative = ((( previousPrice/ currentPrice) - 1) * 100).toFixed(2)
        return porcentagePriceNegative
    }
}

function priceVerification(){
    const previousPrice = +window.prompt('Qual era o preço anterior do produto?');
    const currentPrice = +window.prompt('Qual é o preço atual do produto?');
    const porcentage = porcentageVerification(previousPrice, currentPrice)
    const message = document.querySelector('#message');
    message.innerHTML = `<h3><strong>Analisando os valores informados</strong></h3></br> O produto custava ${formatMoney(previousPrice)} e agora custa ${formatMoney(currentPrice)}.</br>`;
    const priceDifference =  currentPrice - previousPrice
    if (priceDifference > 0) {
        message.innerHTML += `Hoje o produto está mais caro. </br> O preço subiu ${formatMoney(priceDifference)} em relação ao preço anterior.</br> Uma variação de ${porcentage}% para cima.`
    } else {
        message.innerHTML += `Hoje o produto está mais barato. </br> O preço baixo ${formatMoney(priceDifference)} em relação ao preço anterior.</br> Uma variação de ${porcentage}% para baixo.`
    }
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Verificar'
    button.addEventListener("click", priceVerification)
    return button;
} 

const divButton = document.createElement('div');
divButton.classList = 'divButton';
const message = document.createElement('div');
message.innerHTML = 'Clique no botão acima para analisar a mudança de preço'
message.className = 'message'
message.id = 'message'
divButton.appendChild(startChallenge());
app.appendChild(divButton); 
app.appendChild(message);