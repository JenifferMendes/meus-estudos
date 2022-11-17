function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    var res = window.document.getElementById('res')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <=10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
/*function tabuada() {
   let num = window.document.getElementById('txtn')
   let tab = window.document.getElementById('seltab')
   var res = window.document.getElementById('res')
   if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
   } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10) {
            let item = document.createElement('option')
            item.text =`${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
   }
}*/