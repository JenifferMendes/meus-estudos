function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'childboy.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'teenman.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'man.png')
            } else {
                img.setAttribute('src', 'oldman.png')
            }   
        } else if (fsex[1].checked){ 
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'childgirl.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'teenwoman.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'woman.png')
            } else {
                img.setAttribute('src', 'oldwoman.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)      
    }
}
