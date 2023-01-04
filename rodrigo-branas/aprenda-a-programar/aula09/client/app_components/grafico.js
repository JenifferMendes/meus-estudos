class Grafico {
    constructor () {
        this.element = document.createElement("div");
        this.element.className = "grafico";
        this.cores = ["purple","blue","yellow","orange", "red"];
    }
    
    adicionarColuna(valor, descricao) {
        const coluna = new Div("grafico-coluna", "grafico-coluna");
        const cor = new Div("grafico-coluna-cor","grafico-coluna-cor");
        cor.element.style.height = (valor * 100)/10000 + "px";
        cor.element.style.background = this.cores.pop();
        const nomeDoMes = new Div("grafico-nomedomes", "grafico-nomedomes");
        nomeDoMes.element.innerText = descricao;
        coluna.adicionarElementoFilho(cor.element);
        coluna.adicionarElementoFilho(nomeDoMes.element);
        this.element.appendChild(coluna.element);
    }
}