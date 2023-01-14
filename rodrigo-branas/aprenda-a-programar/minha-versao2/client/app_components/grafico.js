class Grafico {
    constructor () {
        this.element = document.createElement("div");
        this.element.className = "grafico";
        this.cores = ["#A65E7B", "#A65E7B", "#A65E7B", "#417360", "#46731D", "#BF1D3C", "#417360", "#417360", "#01c29a", "#df6845", "#417360", "#417360"];

    }
    
    adicionarColuna(valor, descricao, minValue, maxValue) {
        const coluna = new Div("grafico-coluna", "grafico-coluna");
        const cor = new Div("grafico-coluna-cor","grafico-coluna-cor");
        const invertedLERP = (minValue, maxValue, valor) => (valor - minValue) / (maxValue - minValue);
        const proporcao = invertedLERP(minValue, maxValue, valor);
        const proporcaoZero = invertedLERP(minValue, maxValue, 0);
        
        if (valor >=0) {
            cor.element.style.width = 100 * (proporcao - proporcaoZero) + "%";
            cor.element.style.left = 100 * proporcaoZero + "%";
            cor.element.style.background = "var(--color-bar-positive)";
        } else {
            cor.element.style.width = 100 * Math.abs(proporcao - proporcaoZero) + "%";
            cor.element.style.left = 100 * proporcaoZero - 100 * Math.abs(proporcao - proporcaoZero) + "%";
            cor.element.style.background = "var(--color-bar-negative)";
            cor.element.style.justifyContent = "flex-end";
            cor.element.style.paddingRight = 10 + "px";

        }

        const nomeDoMes = new Div("grafico-nomedomes", "grafico-nomedomes");
        nomeDoMes.element.innerText = descricao.substring(0, 3);;
        cor.adicionarElementoFilho(nomeDoMes.element);
        coluna.adicionarElementoFilho(cor.element);
        this.element.appendChild(coluna.element);
    }
}