class Tela {
    constructor() {
        this.init();
    }

    async init() {
        const response = await fetch("http://localhost:3000/api/lancamentos");
        const lancamentos = await response.json();
        const ano = new Ano();
        ano.adicionarMes(new Mes("janeiro"));
        ano.adicionarMes(new Mes("fevereiro"));
        ano.adicionarMes(new Mes("marco"));
        ano.adicionarMes(new Mes("abril"));
        ano.adicionarMes(new Mes("maio"));
        for (const lancamento of lancamentos) {
            ano.adicionarLancamento(lancamento.mes, new Lancamento(lancamento.categoria, lancamento.tipo, parseFloat(lancamento.valor)))
        }
        this.ano = ano;
        ano.calcularSaldo();
        this.renderizar();
    }

    formatarDinheiro(valor) {
        return new Intl.NumberFormat("pt-br", {currency: "BRL", style: "currency"}).format(valor);
    }

    adicionarLancamentos() {
        const mes = document.getElementById("mes");
        const tipo = document.getElementById("tipo");
        const categoria = document.getElementById("categoria");
        const valor = document.getElementById("valor");
        this.ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value)));
        fetch("http://localhost:3000/api/lancamentos", { method: "post", headers: { "content-type": "application/json" }, body:  JSON.stringify({mes: mes.value, tipo: tipo.value, categoria: categoria.value, valor: parseFloat(valor.value)})});
        this.ano.calcularSaldo();
        this.renderizar();
        document.getElementById("mes").value = this.ano.meses[0].nome;
        document.getElementById("tipo").value = "receita";
        document.getElementById("valor").value = "";
        document.getElementById("categoria").value = "";
    }

    renderizar () {
        document.getElementById("app").remove();
        const app = new Div("app");
        const titulo = new h2("Finanças Pessoais");
        titulo.element.className = "titulo";
    
        const form = new Div("form-lancamento","lancamento");
        const mesSelect = new Select("mes");
        for (const mes of this.ano.meses) {
            mesSelect.adicionarOpcao(mes.nome);
        }
        
        const tipoSelect = new Select("tipo");
        tipoSelect.adicionarOpcao("receita");
        tipoSelect.adicionarOpcao("despesa");
    
        const categoriaInputText = new Input("categoria", "text", "categoria");
        const valorInputNumber = new Input("valor", "number", "valor");
    
        const botaoDeAdicionar = new Button("botao", "botao", "Adicionar Lançamento");
    
        botaoDeAdicionar.addListener(() =>{
            this.adicionarLancamentos();
        });
        form.adicionarElementoFilho(mesSelect.element);
        form.adicionarElementoFilho(tipoSelect.element);
        form.adicionarElementoFilho(categoriaInputText.element);
        form.adicionarElementoFilho(valorInputNumber.element);
        form.adicionarElementoFilho(botaoDeAdicionar.element);
        app.adicionarElementoFilho(form.element);
        app.adicionarElementoFilho(titulo.element);
        
        
        const grafico = new Grafico();
        for (const mes of this.ano.meses) {
            grafico.adicionarColuna(mes.totalMensal.saldo, mes.nome);
        }
        app.adicionarElementoFilho(grafico.element);
    
        for (const mes of this.ano.meses) {
            const nomeDoMes = new h2(mes.nome);
            app.adicionarElementoFilho(nomeDoMes.element)
           
            const tabelaLancamento = new Tabela ("tabela-lancamentos");
            tabelaLancamento.addRow("th", ["CATEGORIA", "VALOR"]);
            for (const lancamento of mes.lancamentos) {
                tabelaLancamento.addRow("td",[lancamento.categoria, this.formatarDinheiro(lancamento.getValorString())]);
            }
            tabelaLancamento.addRow("th", ["Juros", this.formatarDinheiro(mes.totalMensal.juros)]);
            tabelaLancamento.addRow("th", ["Rendimentos", this.formatarDinheiro(mes.totalMensal.rendimentos)]);
            tabelaLancamento.addRow("th", ["TOTAL MENSAL", this.formatarDinheiro(mes.totalMensal.saldo)]);
            
            app.adicionarElementoFilho(tabelaLancamento.element);
            app.adicionarElementoFilho(document.createElement("hr"));
        }
        const [body] = document.getElementsByTagName("body");
        body.appendChild(app.element);
    }
}