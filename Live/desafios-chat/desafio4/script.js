const towerOne = [3,2,1];
const towerTwo = [];
const towerThree= [];

function moveDisk(id, fromTower, toTower) {
    const i = id  // id click
    if (fromTower[i] === fromTower[fromTower.length - 1]) {
        if (toTower.length === 0 || fromTower[fromTower.length - 1] < toTower[toTower.length - 1]) {
            toTower.push(fromTower[i]);
            fromTower.pop();
            return "Disco movido com sucesso!"
        } else {
            return "O disco é maior que o disco da pilha que você deseja colocar!";
        }
    } else {       
        return "Não é o ultimo da pilha!";
    }
}

function checksWin(quantityDisk, tower) {
    if (tower.length === quantityDisk) {
        return "você ganhou"
    } else {
        return "continue"
    }
}

// console.log(towerOne, towerTwo, towerThree, moveDisk(2, towerOne, towerThree));
// console.log(towerOne, towerTwo, towerThree, moveDisk(1, towerOne, towerTwo));
// console.log(towerOne, towerTwo, towerThree, moveDisk(0, towerThree, towerTwo));
// console.log(towerOne, towerTwo, towerThree, moveDisk(0, towerOne, towerThree));
// console.log(towerOne, towerTwo, towerThree, moveDisk(1, towerTwo, towerOne));
// console.log(towerOne, towerTwo, towerThree, moveDisk(0, towerTwo, towerThree));
// console.log(towerOne, towerTwo, towerThree, moveDisk(0, towerOne, towerThree));
// console.log(checksWin(3, towerThree));

// const message = arrastaPraCima(towerOne, towerThree)
// console.log(towerOne, "haste remetário saida");
// console.log(towerThree, "haste destinatente saida");
// console.log(message)
