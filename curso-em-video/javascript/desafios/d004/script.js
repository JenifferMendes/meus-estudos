const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = "Calculando o Troco";
title.className = 'title';
app.appendChild(title);

function changeCalculation() {
    const product = window.prompt('Que produto você está comprando? ')
    const productPrice = +window.prompt(`Quanto custa ${product} que você está comprando?`)
    const amountPaid = +window.prompt(`Qual foi o valor que você deu para pagar ${product}`)
    if (productPrice < amountPaid ) {
        const change = amountPaid - productPrice        
        const message = `Você comprou ${product} que custou R$${productPrice}.\nDeu R$${amountPaid} em dinheiro e vai receber R$${change} de troco.\nVolte Sempre!!!`
         return window.alert(message);
    } else {
        return window.alert("Você não recebe troco")
    }
    
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Comprar produto'
    button.addEventListener("click", changeCalculation)
    return button;
}
const divButton = document.createElement('div');
divButton.classList = 'divButton';
divButton.appendChild(startChallenge());
app.appendChild(divButton); 