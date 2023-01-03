class Lancamento {

    constructor(categoria, tipo, valor) {
        if (categoria === "") {
            throw new Error("A Categoria é obrigatório!");
        }
        if (tipo !== "despesa" && tipo !== "receita") {
            throw new Error("O lançamento deve ser uma receita ou uma despesa");
        }
        if (valor < 0) {
            throw new Error("Valor inválido, insira um novo.");
        }
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;
    }

    getValorString () {
        // if (this.tipo === "despesa") {
        //     return this.valor * -1
        // } else {
        //    return this.valor 
        // }
        return this.valor = (this.tipo === "receita")  ? this.valor : this.valor * -1
    }   
}