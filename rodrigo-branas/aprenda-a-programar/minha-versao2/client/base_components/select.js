class Select {
    constructor(id, className){
        this.element = document.createElement("select");
        this.element.id = id;
        this.element.className = className;
    }

    adicionarOpcao(text, className){
        const opcao = document.createElement("option");
        opcao.text = text;
        opcao.className = className;
        this.element.appendChild(opcao);
    }
    getValue() {
       return this.element.value;
    }
}