const hasteInicial = [5,4];
const hasteAuxiliar = [3];
const hasteFinal = [2,1]
console.log(hasteInicial[1], "inicial antes");
// hasteFinal = []
// console.log(hasteInicial[2]);
// console.log(hasteAuxiliar);

const i = 1  // id click

console.log(hasteAuxiliar, "auxiliar antes");
if (hasteInicial[i] === hasteInicial[hasteInicial.length - 1]) {
    if (hasteInicial[hasteInicial.length - 1] < hasteAuxiliar[hasteAuxiliar.length - 1]) {
        hasteAuxiliar.push(hasteInicial[i]);
        console.log(hasteAuxiliar[hasteInicial.length - 1], "acrescentou o ultimo");
        console.log(hasteAuxiliar, "depois dos dois if");
    } else {
        console.log("o valor é maior que o da pilha");
    }
} else {
    console.log("não é o ultimo da pilha");
}

// if (hasteInicial[hasteInicial.length - 1] < hasteAuxiliar[hasteAuxiliar.length - 1] ){
// if (disco[i] arrastado < disco[i] na haste) {
//     console.log("pode colocar");
// } else {
//     console.log("não colocar, voltar pra haste de onde saiu");
// }
