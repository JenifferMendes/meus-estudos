class Tela {
    constructor(lancamentoService) {
        this.lancamentoService = lancamentoService;
        this.init();        
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
        const app = new Div("app", "app");
        const header = new Div("header", "header");

        const buttonMenu = new Button("buttonMenu", "buttonMenu", "Menu");
        buttonMenu.addListener(()=> {
            const menuInfo = document.querySelector("#menuDiv");
            menuInfo.classList.toggle("elementInvisible");
        });
        header.adicionarElementoFilho(buttonMenu.element);
        
        const titulo = new h2("titulo","Finanças Pessoais");
        header.adicionarElementoFilho(titulo.element);
                       
        app.adicionarElementoFilho(header.element);

        const menuDiv = new Div("menuDiv", "menuDiv");
        menuDiv.element.classList.add("elementInvisible");
        for (const mes of this.ano.meses) {
            const menuLinkMes = new Link("menuLink", "menuLink", mes.nome, `${mes.nome}`);
            menuDiv.adicionarElementoFilho(menuLinkMes.element);
        }
        
        app.adicionarElementoFilho(menuDiv.element);

        const buttonadd = new Button("addButton", "addButton", "+");
        buttonadd.addListener(()=> {
            const addInfo = document.querySelector("#form-lancamento");
            console.log(addInfo);
            addInfo.classList.toggle("elementInvisible");
        });
        app.adicionarElementoFilho(buttonadd.element);

        const form = this.criarForm();
        app.adicionarElementoFilho(form.element);
        
        const grafico = this.criarGrafico();
        app.adicionarElementoFilho(grafico.element);
        app.adicionarElementoFilho(document.createElement("hr"));

        
        for (const mes of this.ano.meses) {
            const divTable = new Div(mes.nome, "divTable");
            const nomeDoMes = new h2("titulo-mes", mes.nome);
            divTable.adicionarElementoFilho(nomeDoMes.element);

            const tabelaLancamento = this.criarTabelaLancamento(mes);
            divTable.adicionarElementoFilho(tabelaLancamento.element);
            divTable.adicionarElementoFilho(document.createElement("hr"));
            app.adicionarElementoFilho(divTable.element);
        }
        
        const inicio = new Button("inicioButton", "inicioButton", "Início");
        inicio.addListener(() => {
           window.scrollTo(0,0);
        });
        app.adicionarElementoFilho(inicio.element);
        const [body] = document.getElementsByTagName("body");
        body.appendChild(app.element);
    }

    criarForm() {
        const form = new Div("form-lancamento","lancamento");
        form.element.classList.add("elementInvisible");
        this.mesSelect = new Select("mes");
        for (const mes of this.ano.meses) {
            this.mesSelect.adicionarOpcao(mes.nome);
        }
        
        this.tipoSelect = new Select("tipo");
        this.tipoSelect.adicionarOpcao("receita");
        this.tipoSelect.adicionarOpcao("despesa");
    
        this.categoriaInputText = new Input("categoria", "text", "categoria");
        this.valorInputNumber = new Input("valor", "number", "valor");
    
        const botaoDeAdicionar = new Button("button-add", "button-add", "Adicionar Lançamento");
           
        botaoDeAdicionar.addListener(() =>{
            this.adicionarLancamentos();
        });

        const botaoFechar = new Button("botaoFechar", "botaoFechar", "Fechar");
        botaoFechar.addListener(() =>{
            const infoFechar = document.querySelector("#form-lancamento");
            console.log(infoFechar);
            infoFechar.classList.toggle("elementInvisible");
        });

        form.adicionarElementoFilho(this.mesSelect.element);
        form.adicionarElementoFilho(this.tipoSelect.element);
        form.adicionarElementoFilho(this.categoriaInputText.element);
        form.adicionarElementoFilho(this.valorInputNumber.element);
        form.adicionarElementoFilho(botaoDeAdicionar.element);
        form.adicionarElementoFilho(botaoFechar.element)
        return form;
    }

    criarGrafico() {
        const grafico = new Grafico();
        // const maxValue = Math.max(...this.ano.meses.map(mes => mes.totalMensal.saldo));
        // console.log(maxValue);
        // const minValue = Math.min(...this.ano.meses.map(mes => mes.totalMensal.saldo));
        // console.log(minValue);
        for (const mes of this.ano.meses) {
            grafico.adicionarColuna(mes.totalMensal.saldo, mes.nome);
        }
        return grafico;
    }

    criarTabelaLancamento(mes) {
        const tabelaLancamento = new Tabela ("tabela-lancamentos");
            tabelaLancamento.addRowTh("CATEGORIA", "VALOR");
            for (const lancamento of mes.lancamentos) {
                const button = new Button("button-delete", "button-delete", "X");
                button.addListener(()=> {
                    console.log(lancamento)
                    this.deletarLancamentos(mes, lancamento);
                });
                tabelaLancamento.addRowTd("td", [ lancamento.categoria, this.formatarDinheiro(lancamento.getValorString())],[button] );
            }

            tabelaLancamento.addRowTh("Juros", this.formatarDinheiro(mes.totalMensal.juros));
            tabelaLancamento.addRowTh("Rendimentos", this.formatarDinheiro(mes.totalMensal.rendimentos));
            tabelaLancamento.addRowTh("TOTAL MENSAL", this.formatarDinheiro(mes.totalMensal.saldo));

        return tabelaLancamento;
    }
}