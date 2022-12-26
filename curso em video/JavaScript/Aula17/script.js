function contar() {
   let ini = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('res')
     
   if (ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossível contar!'
   } else {
        res.innerHTML = `Contando:`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('valor de passo invalido')
            p = 1
        } else {
            if( i < f) {
                for (let c = i; c <= f; c+= p) {
            res.innerHTML += `${c} \u{1F49C} `
                }
            } else {
                for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F49C} `
                }
            }
        }
        res.innerHTML += `\u{1F9E0}`    
   }
}