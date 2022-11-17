    let num = document.getElementById('txtn')
    var lista = window.document.getElementById('flista')
    var res = document.getElementById('res')
    var valores =[]

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }
    
    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {    
        if (isNumero(num.value) && !inLista(num.value, valores)) {
            var n = Number(num.value)
            valores.push(n)
            var item = document.createElement('option')
            item.text = `O valor ${n} foi adicionado`
            item.value = `tab${n}`
            lista.appendChild(item)
            res.innerHTML = '' // depois de adicionado, limpar o textinho
        } else {
            alert('Valor inválido ou já encontrado na lista')
        }
        num.value = ''  // para apagar
        num.focus()
    }


    function finalizar() {
        if (valores.length == 0) {
            alert('Adicione valores antes de finalizar')
        } else {
            let total = valores.length
            var maior = valores[0]
            var menor = valores[0]
            let soma = 0
            let media = 0
            for (let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior) 
                    maior = valores [pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma / total
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
            res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p> A soma dos valores, temos ${soma}. </p>`
            res.innerHTML += `<p> A media dos valores é igual a ${media}. </p>`
        }
    }
