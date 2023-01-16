class Tela {
  constructor(lancamentoService) {
    this.lancamentoService = lancamentoService;
    this.init();
  }

  async init() {
    const lancamentos = await this.lancamentoService.getLancamento();
    this.ano = new Ano();
    for (const lancamento of lancamentos) {
      this.ano.adicionarLancamento(
        lancamento.mes,
        new Lancamento(
          lancamento.categoria,
          lancamento.tipo,
          parseFloat(lancamento.valor),
          lancamento.idLancamento
        )
      );
    }
    this.ano.calcularSaldo();
    this.renderizar();
  }

  formatarDinheiro(valor) {
    return new Intl.NumberFormat("pt-br", {
      currency: "BRL",
      style: "currency",
    }).format(valor);
  }

  toggleClassName(id, toggleClassName) {
    const toggleClass = document.querySelector(`#${id}`);
    toggleClass.classList.toggle(toggleClassName);
  }

  adicionarLancamentos() {
    const mes = this.mesSelect.getValue();
    const tipo = this.tipoSelect.getValue();
    ("tipo");
    const categoria = this.categoriaInputText.getValue();
    const valor = this.valorInputNumber.getValue();
    this.ano.adicionarLancamento(mes, new Lancamento(categoria, tipo, valor));
    const lancamento = {
      mes: mes,
      tipo: tipo,
      categoria: categoria,
      valor: valor,
    };
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

  renderizar() {
    document.getElementById("app").remove();
    const app = new Div("app", "app");
    const header = new Div("header", "header");

    const menuButton = new Button("menuButton", "menuButton material-symbols-outlined", "list");
    menuButton.addListener(() => {
      this.toggleClassName("menuDiv", "transition");
    });
    header.adicionarElementoFilho(menuButton.element);

    const title = new h2("title", "Finanças Pessoais");
    header.adicionarElementoFilho(title.element);

    const menuDiv = this.createMenu();
    app.adicionarElementoFilho(menuDiv.element);
    app.adicionarElementoFilho(header.element);

    const plusButton = new Button("plusButton", "plusButton material-symbols-outlined", "forms_add_on");
    plusButton.addListener(() => {
      this.toggleClassName("formEntries", "transition");
    });
    app.adicionarElementoFilho(plusButton.element);

    const form = this.criarForm();
    app.adicionarElementoFilho(form.element);
    
    const warningDiv = this.createWarning();
    app.adicionarElementoFilho(warningDiv.element);
    
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

    const begin = new Button("beginButton", "beginButton material-symbols-outlined", "keyboard_arrow_up");
    begin.addListener(() => {
      window.scrollTo(0, 0);
    });
    app.adicionarElementoFilho(begin.element);
    const [body] = document.getElementsByTagName("body");
    body.appendChild(app.element);
  }

  createMenu() {
    const menuDiv = new Div("menuDiv", "menuDiv");
    for (const mes of this.ano.meses) {
      const menuLinkMes = new Link(
        "menuLink",
        "menuLink",
        mes.nome,
        `${mes.nome}`
        );
        menuDiv.adicionarElementoFilho(menuLinkMes.element);
        menuLinkMes.addListener(() => {
          this.toggleClassName("menuDiv", "transition");
        });
      }
      return menuDiv;
  }

  criarForm() {
    const form = new Div("formEntries", "formEntries");
    // form.element.classList.add("invisibleElement");
    this.mesSelect = new Select("mes", "inputSelectForm");
    for (const mes of this.ano.meses) {
      this.mesSelect.adicionarOpcao(mes.nome, "optionForm");
    }

    this.tipoSelect = new Select("tipo", "inputSelectForm");
    this.tipoSelect.adicionarOpcao("receita","optionForm");
    this.tipoSelect.adicionarOpcao("despesa","optionForm");

    this.categoriaInputText = new Input("categoria", "text", "categoria", "inputSelectForm");
    this.valorInputNumber = new Input("valor", "number", "valor", "inputSelectForm");

    const addEntryButton = new Button(
      "addEntryButton",
      "addEntryButton",
      "Adicionar Lançamento"
    );

    addEntryButton.addListener(() => {
      this.adicionarLancamentos();
    });

    const closeButton = new Button("closeButton", "closeButton", "Fechar");
    closeButton.addListener(() => {
      this.toggleClassName("formEntries", "transition" );
    });

    form.adicionarElementoFilho(this.mesSelect.element);
    form.adicionarElementoFilho(this.tipoSelect.element);
    form.adicionarElementoFilho(this.categoriaInputText.element);
    form.adicionarElementoFilho(this.valorInputNumber.element);
    form.adicionarElementoFilho(addEntryButton.element);
    form.adicionarElementoFilho(closeButton.element);
    return form;
  }

  criarGrafico() {
    const graficoDiv = new Div("graficoDiv", "graficoDiv");
    const graficoNome = new h2("grafico-name", "Gráfico Anual");
    const grafico = new Grafico();

    const maxValue = Math.max(...this.ano.meses.map(mes => mes.totalMensal.saldo));
    const minValue = Math.min(...this.ano.meses.map(mes => mes.totalMensal.saldo));
    for (const mes of this.ano.meses) {
      grafico.adicionarColuna(mes.totalMensal.saldo, mes.nome, minValue, maxValue);
    }
    graficoDiv.adicionarElementoFilho(graficoNome.element);
    graficoDiv.adicionarElementoFilho(grafico.element);
    return graficoDiv;
  }

  createWarning() {
    const warningDiv = new Div("warningDiv", "warningDiv");
    warningDiv.element.classList.add("invisibleElement");
    const warningText = new h2("warningText", "Você tem certeza disso?");
    const warningDivButton = new Div("divButton", "divButton");
    const warningButtonCancel = new Button(
      "buttonCancel",
      "buttonCancel",
      "Cancelar"
    );
    warningButtonCancel.addListener(() => {
      this.toggleClassName("warningDiv", "invisibleElement");
    });
    const warningButtonDelete = new Button(
      "buttonDelete",
      "buttonDelete",
      "Deletar"
    );
   
    warningDivButton.adicionarElementoFilho(warningButtonCancel.element);
    warningDivButton.adicionarElementoFilho(warningButtonDelete.element);
    warningDiv.adicionarElementoFilho(warningText.element);
    warningDiv.adicionarElementoFilho(warningDivButton.element);
    return warningDiv;
  }

  criarTabelaLancamento(mes) {
    const tabelaLancamento = new Tabela("tabela-lancamentos");
    tabelaLancamento.addRowTh("CATEGORIA", "VALOR");
        
    for (const lancamento of mes.lancamentos) {
      const button = new Button("button-delete", "button-delete material-symbols-outlined", "delete");
      button.addListener(() => {
        this.toggleClassName("warningDiv", "invisibleElement");
        
        const warningDelete = document.querySelector("#buttonDelete");
        warningDelete.addEventListener("click", () => this.deletarLancamentos(mes, lancamento));
      });
        
      tabelaLancamento.addRowTd(
        "td",
        [
          lancamento.categoria,
          this.formatarDinheiro(lancamento.getValorString()),
        ],
        [button]
      );
    }

    tabelaLancamento.addRowTh(
      "Juros",
      this.formatarDinheiro(mes.totalMensal.juros)
    );
    tabelaLancamento.addRowTh(
      "Rendimentos",
      this.formatarDinheiro(mes.totalMensal.rendimentos)
    );
    tabelaLancamento.addRowTh(
      "TOTAL MENSAL",
      this.formatarDinheiro(mes.totalMensal.saldo)
    );

    return tabelaLancamento;
  }
}
