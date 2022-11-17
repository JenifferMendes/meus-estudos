let marido = { 
    nome: 'Jungkook',
    sexo:'m',
    peso: 67,
    engordar(p=0){
        console.log('engordou')
        this.peso +=p


    }   
}
marido.engordar(2)
console.log(`${marido.nome} pesa ${marido.peso} Kg`)