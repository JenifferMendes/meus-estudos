var agora = new Date()
var diaSem = agora.getDay()

console.log(`dia da semana ${diaSem}`)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('ERRO! Dia inválido')
        break
    
}