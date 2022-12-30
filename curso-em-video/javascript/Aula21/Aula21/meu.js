function adicionar(){
    var num = document.getElementById('txtn')
    var tab = window.document.getElementById('selquadro')
    var res = document.getElementById('res')
    var valores =[]
    var n = Number(num.value)
    var array = [n]
    
    if (num.value.length == 0) {
        alert('Digite um número!')
    } else if (n < 1 || n > 100){
        alert('Digite um número entre 1 e 100!')
    } else {
        tab.innerHTML = ''
        array.push(num)
        var item = document.createElement('option')
        item.text = `O valor ${n} foi adicionado`
        item.value = `tab${n}`
        tab.appendChild(item)
    }
}

function finalizar () {
    var x = n.sort
    var tam = n.length
    var soma = 0
    var media = soma / tam

    console.log(`Ao todo, tempos ${0} números cadastrados`)
    console.log(`O maior valor informado foi ${tam}`)
    console.log(`O menor valor informado foi ${0}`)
    console.log(`Somando todos os valores, temos 25`)
    console.log(`a media dos valores digitados é ${0}`)
    
}
