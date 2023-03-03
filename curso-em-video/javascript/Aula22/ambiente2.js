let mascote = {nome:'koiziny',idade: 'sem idade definida', peso: 55,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
    return this.peso
}}
console.log(mascote.engordar(10))