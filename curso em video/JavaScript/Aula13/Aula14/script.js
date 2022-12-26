function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >=0 && hora <12) {
        msg.innerHTML +='Bom dia!'
        img.src = 'imagens/manha.png'
        document.body.style.background = "#FD7007"

    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML +='Bom Tarde!'
        img.src = 'imagens/tarde.png'
        document.body.style.background = "#FBBF6A"
    } else {
        console.log('Boa noite')
        msg.innerHTML +='Boa Noite!'
        img.src = 'imagens/noite.png'
        document.body.style.background = "#3B2E4C"
    }
}
