const periodoDoDia = [
    {
        periodo: 'manha',
        mensagem: 'Bom dia!',
        imagem: 'imagens/manha.png',
        fundo: '#FD7007',
        inicio: 0,
        fim: 12
    },
    {
        periodo: 'tarde',
        mensagem: 'Boa tarde!',
        imagem: 'imagens/tarde.png',
        fundo: '#FBBF6A',
        inicio: 12,
        fim: 18
    },
    {
        periodo: 'noite',
        mensagem: 'Boa noite!',
        imagem: 'imagens/noite.png',
        fundo: '#3B2E4C',
        inicio: 18,
        fim: 24
    }
]

const msg = window.document.getElementById('msg')
const img = window.document.getElementById('imagem')

function definirHoras(){
    const data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    // var hora = 10
    // var minutos = 05
    if (minutos < 10) {
        minutos = '0' + minutos
    }
    const horaAtual = [hora, minutos]
    return  horaAtual
}

const horaAtual = definirHoras()

function periodoAtual(horaAtual){
    const [hora , minuto] = horaAtual
    msg.innerHTML = `Agora são ${hora}:${minuto} horas. `
    for(const periodo of periodoDoDia){
        if ( hora >= periodo.inicio && hora <= periodo.fim){
            msg.innerHTML += periodo.mensagem
            img.src = periodo.imagem
            document.body.style.background = periodo.fundo
        }
    }
}

function renderizar(horaAtual) {
    "use strict";
    const periodo = periodoAtual(horaAtual);
    return periodo
}
