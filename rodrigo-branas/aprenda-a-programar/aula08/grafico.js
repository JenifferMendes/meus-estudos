class Grafico {
    constructor () {
        this.element = document.createElement("div");
        this.element.className = "grafico";
        this.cores = ["purple","blue","yellow","orange", "red"];
    }
    
    adicionarColuna(valor, descricao) {
        const coluna = document.createElement("div");
        coluna.className = "grafico-coluna";
        const cor = document.createElement("div");
        cor.style.height = (valor * 100)/10000 + "px";
        cor.style.background = this.cores.pop();
        coluna.appendChild(cor);
        const nomeDoMes = document.createElement("div");
        nomeDoMes.innerText = descricao;
        coluna.appendChild(cor);
        coluna.appendChild(nomeDoMes);
        this.element.appendChild(coluna);
    }
}