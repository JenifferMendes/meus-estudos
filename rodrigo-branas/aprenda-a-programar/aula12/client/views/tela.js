class Tela {
    constructor(lancamentoService) {
        this.lancamentoService = lancamentoService;this.init();        
    }

    async init() {
        const lancamentos = await this.lancamentoService.getLancamento();
        this.ano = new Ano();
        for (const lancamento of lancamentos) {
            this.ano.adicionarLancamento(lancamento.mes, new Lancamento( lancamento.categoria, lancamento.tipo, parseFloat(lancamento.valor), lancamento.idLancamento));
        }
        this.ano.calcularSaldo();
        this.renderizar();
    }

    formatarDinheiro(valor) {
        return new Intl.NumberFormat("pt-br", {currency: "BRL", style: "currency"}).format(valor);
    }

    adicionarLancamentos() {
        const mes = this.mesSelect.getValue();
        const tipo = this.tipoSelect.getValue();("tipo");
        const categoria = this.categoriaInputText.getValue();
        const valor = this.valorInputNumber.getValue();
        this.ano.adicionarLancamento(mes, new Lancamento(categoria, tipo, valor));
        const lancamento = {mes: mes, tipo: tipo, categoria: categoria, valor: valor}
        this.lancamentoService.saveLancamento(lancamento);
        this.ano.calcularSaldo();
        this.renderizar();
    }

    deletarLancamentos(mes, lancamento) {
        this.lancamentoService.deleteLancamento(lancamento.idLancamento);
        this.ano.deletarLancamento(mes, lancamento);
        this.ano.calcularSaldo();
        this.renderizar();
    }
    renderizar () {
        document.getElementById("app").remove();
        const app = new Div("app");
        const titulo = new h2("Finanças Pessoais");
        titulo.element.className = "titulo";
        app.adicionarElementoFilho(titulo.element);
        const form = this.criarForm();
        app.adicionarElementoFilho(form.element);
        const grafico = this.criarGrafico();
        app.adicionarElementoFilho(grafico.element);
        for (const mes of this.ano.meses) {
            const nomeDoMes = new h2(mes.nome);
            app.adicionarElementoFilho(nomeDoMes.element)
            const tabelaLancamento = this.criarTabelaLancamento(mes);
            app.adicionarElementoFilho(tabelaLancamento.element);
            app.adicionarElementoFilho(document.createElement("hr"));
        }
        const [body] = document.getElementsByTagName("body");
        body.appendChild(app.element);
    }

    criarForm() {
        const form = new Div("form-lancamento","lancamento");
        this.mesSelect = new Select("mes");
        for (const mes of this.ano.meses) {
            this.mesSelect.adicionarOpcao(mes.nome);
        }
        
        this.tipoSelect = new Select("tipo");
        this.tipoSelect.adicionarOpcao("receita");
        this.tipoSelect.adicionarOpcao("despesa");
    
        this.categoriaInputText = new Input("categoria", "text", "categoria");
        this.valorInputNumber = new Input("valor", "number", "valor");
    
        const botaoDeAdicionar = new Button("botao", "botao", "Adicionar Lançamento");
    
        botaoDeAdicionar.addListener(() =>{
            this.adicionarLancamentos();
        });

        form.adicionarElementoFilho(this.mesSelect.element);
        form.adicionarElementoFilho(this.tipoSelect.element);
        form.adicionarElementoFilho(this.categoriaInputText.element);
        form.adicionarElementoFilho(this.valorInputNumber.element);
        form.adicionarElementoFilho(botaoDeAdicionar.element);
        return form;
    }

    criarGrafico() {
        const grafico = new Grafico();
        for (const mes of this.ano.meses) {
            grafico.adicionarColuna(mes.totalMensal.saldo, mes.nome);
        }
        return grafico;
    }

    criarTabelaLancamento(mes) {
        const tabelaLancamento = new Tabela ("tabela-lancamentos");
            tabelaLancamento.addRow("th", ["CATEGORIA", "VALOR"]);
            for (const lancamento of mes.lancamentos) {
                const button = new Button("delete-lancamento", "delete-lancamento", "delete");
                button.addListener(()=> {
                    console.log(lancamento)
                    this.deletarLancamentos(mes, lancamento);
                });
                tabelaLancamento.addRow("td", [ lancamento.categoria, this.formatarDinheiro(lancamento.getValorString())],[button] );
            }

            tabelaLancamento.addRow("th", ["Juros", this.formatarDinheiro(mes.totalMensal.juros)]);
            tabelaLancamento.addRow("th", ["Rendimentos", this.formatarDinheiro(mes.totalMensal.rendimentos)]);
            tabelaLancamento.addRow("th", ["TOTAL MENSAL", this.formatarDinheiro(mes.totalMensal.saldo)]);

        return tabelaLancamento;
    }
}