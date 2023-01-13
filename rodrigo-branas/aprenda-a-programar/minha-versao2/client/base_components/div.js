class Div {
    constructor(id, className){
        this.element = document.createElement("div");
        this.element.id = id;
        this.element.className = className;
    }
    adicionarElementoFilho(filho) {
        this.element.appendChild(filho);
    }
}