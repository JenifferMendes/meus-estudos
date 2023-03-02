// let num = [10, 2, 4, 9, 13, 45]
// console.log(num)


// function teste(){
//     for(let i = 0; i < num.length; i++) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
//     }
// }

// function teste(){
//     for( let i in num ) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
//     }
// }

// num.forEach( (elemento) => {console.log(`A posição ${num.indexOf(elemento)} tem o valor ${elemento}`)})


function parimp(n){
    if(n % 2 == 0) {
      return `O número ${n} é par`
    } else {
      return console.log(`O número ${n} é impar`)
    }
  }
  let numero = parimp(11)