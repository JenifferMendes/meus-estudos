class Select {
    constructor(id){
        this.element = document.createElement("select");
        this.element.id = id;
    }

    adicionarOpcao(text){
        const opcao = document.createElement("option");
        opcao.text = text;
        this.element.appendChild(opcao);
    }
    getValue() {
       return this.element.value;
    }
}