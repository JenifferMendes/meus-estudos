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
}