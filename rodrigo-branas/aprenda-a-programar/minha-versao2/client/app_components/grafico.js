class Grafico {
    constructor () {
        this.element = document.createElement("div");
        this.element.className = "grafico";
        this.cores = ["#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8", "#7ABFB8","#7ABFB8", "#7ABFB8", "#7ABFB8"];
    }
    
    adicionarColuna(valor, descricao) {
        const coluna = new Div("grafico-coluna", "grafico-coluna");
        const cor = new Div("grafico-coluna-cor","grafico-coluna-cor");
        cor.element.style.width = (valor * 100)/700 + "px";
        // const proporcao =   100*(valor - minValue) / (maxValue - minValue);
        // console.log(proporcao);
        // cor.element.style.width = proporcao + "%";
        cor.element.style.background = this.cores.pop();
        const nomeDoMes = new Div("grafico-nomedomes", "grafico-nomedomes");
        nomeDoMes.element.innerText = descricao;
        coluna.adicionarElementoFilho(cor.element);
        coluna.adicionarElementoFilho(nomeDoMes.element);
        this.element.appendChild(coluna.element);
    }
}