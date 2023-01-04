class Tela {
    constructor() {
        //Janeiro
        const janeiro = new Mes("Janeiro", 0);
        janeiro.adicionarLancamentos(new Lancamento("Salario", "receita", 5000));
        janeiro.adicionarLancamentos(new Lancamento("Alimentacao", "despesa", 1000));
        janeiro.adicionarLancamentos(new Lancamento("Transporte", "despesa", 400));
        janeiro.adicionarLancamentos(new Lancamento("Internet", "despesa", 170));
        janeiro.adicionarLancamentos(new Lancamento("Luz", "despesa", 600));
        janeiro.adicionarLancamentos(new Lancamento("Agua", "despesa", 150));
        janeiro.adicionarLancamentos(new Lancamento("Lazer", "despesa", 300));
        janeiro.adicionarLancamentos(new Lancamento("Show do BTS e SKZ", "despesa", 400));
        // Fevereiro
        const fevereiro = new Mes("Fevereiro");
        fevereiro.adicionarLancamentos(new Lancamento("Salario", "receita", 5000));
        fevereiro.adicionarLancamentos(new Lancamento("Alimentacao", "despesa", 1500));
        fevereiro.adicionarLancamentos(new Lancamento("Transporte", "despesa", 800));
        fevereiro.adicionarLancamentos(new Lancamento("Internet", "despesa", 170));
        fevereiro.adicionarLancamentos(new Lancamento("Luz", "despesa", 800));
        fevereiro.adicionarLancamentos(new Lancamento("Agua", "despesa", 150));
        fevereiro.adicionarLancamentos(new Lancamento("Lazer", "despesa", 200));
        fevereiro.adicionarLancamentos(new Lancamento("Show do BTS e SKZ", "despesa", 600));
        // Março
        const marco = new Mes("Março");
        marco.adicionarLancamentos(new Lancamento("Salario", "receita", 5000));
        marco.adicionarLancamentos(new Lancamento("Alimentacao", "despesa", 1500));
        marco.adicionarLancamentos(new Lancamento("Transporte", "despesa", 800));
        marco.adicionarLancamentos(new Lancamento("Internet", "despesa", 170));
        marco.adicionarLancamentos(new Lancamento("Luz", "despesa", 800));
        marco.adicionarLancamentos(new Lancamento("Agua", "despesa", 150));
        marco.adicionarLancamentos(new Lancamento("Lazer", "despesa", 200));
        marco.adicionarLancamentos(new Lancamento("Show do BTS e SKZ", "despesa", 600));
        // Abril
        const abril = new Mes("Abril");
        abril.adicionarLancamentos(new Lancamento("Salario", "receita", 5000));
        abril.adicionarLancamentos(new Lancamento("Show do BTS e SKZ", "despesa", 600));
        // Maio
        const maio = new Mes("Maio");
        // Ano
        const ano = new Ano();
        ano.adicionarMes(janeiro);
        ano.adicionarMes(fevereiro);
        ano.adicionarMes(marco);
        ano.adicionarMes(abril);
        ano.adicionarMes(maio);
        ano.calcularSaldo();
        janeiro.adicionarLancamentos(new Lancamento("Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses", "despesa", 400));
        ano.calcularSaldo();
        this.ano = ano;
    }

    adicionarLancamentos() {
        const valor = document.getElementById("valor");
        const categoria = document.getElementById("categoria");
        const tipo = document.getElementById("tipo");
        const mes = document.getElementById("mes");
        this.ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, Number(valor.value)));
        this.ano.calcularSaldo();
        this.renderizar();
        document.getElementById("valor").value = "";
        document.getElementById("categoria").value = "";
        document.getElementById("tipo").value = "receita";
        document.getElementById("mes").value = this.ano.meses[0].nome;
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
                tabelaLancamento.addRow("td",[lancamento.categoria, formatarDinheiro(lancamento.getValorString())]);
            }
            tabelaLancamento.addRow("th", ["Juros", formatarDinheiro(mes.totalMensal.juros)]);
            tabelaLancamento.addRow("th", ["Rendimentos", formatarDinheiro(mes.totalMensal.rendimentos)]);
            tabelaLancamento.addRow("th", ["TOTAL MENSAL", formatarDinheiro(mes.totalMensal.saldo)]);
            
            app.adicionarElementoFilho(tabelaLancamento.element);
            app.adicionarElementoFilho(document.createElement("hr"));
        }
        const [body] = document.getElementsByTagName("body");
        body.appendChild(app.element);
    }
}