Regras:
* só pode mover um disco por vez
* Deslocar apenas o disco que está no topo de uma haste
* um disco menor não pode ficar embaixo de um disco maior

Objetivo concluido: passar todas os discos para uma outra haste e manter a hierarquia de tamanho.

começa tudo num lado:
3 hastes - final, auxiliar e a incial.

------
let hasteInicial = [3,2,1]

hasteInicial = [3,2,1]
hasteAuxiliar = [1]
hasteFinal = []

disco[0] = 3 

if ( hasteInicial[hasteInicial.length - 1] && disco no topo da haste) {
    hasteAuxiliar.push(i)
} else {
    não mexe nada.
}

if (disco[i] arrastado < disco[i] na haste) {
    pode colocar
} else {
    não pode. -> faz ele voltar 
}

