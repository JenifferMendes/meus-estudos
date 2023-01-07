class Lancamento {

    constructor(categoria, tipo, valor, idLancamento ) {
        if (categoria === "") {
        
            throw new Error("A Categoria é obrigatório!");
        }
        if (tipo !== "despesa" && tipo !== "receita") {
            throw new Error("O lançamento deve ser uma receita ou uma despesa");
        }
        if (!valor || valor < 0) {
            throw new Error("Valor inválido, insira um novo.");
        }
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;
        this.idLancamento = idLancamento;
    }

    getValorString () {
        return (this.tipo === "despesa")  ? this.valor * -1 : this.valor; 
    }   
}