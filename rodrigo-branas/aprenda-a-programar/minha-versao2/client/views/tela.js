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
    this.render();
  }

  moneyFormat(valor) {
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
    this.render();
  }

  deletarLancamentos(mes, lancamento) {
    this.lancamentoService.deleteLancamento(lancamento.idLancamento);
    this.ano.deletarLancamento(mes, lancamento);
    this.ano.calcularSaldo();
    this.render();
  }

  render() {
    document.getElementById("app").remove();
    const app = new Div("app", "app");
    const header = new Div("header", "header");

    const menuButton = new Button("menuButton", "menuButton material-symbols-outlined", "list");
    menuButton.addListener(() => {
      this.toggleClassName("menuDiv", "transition");
    });
    header.appendChild(menuButton.element);

    const title = new h2("title", "Finanças Pessoais");
    header.appendChild(title.element);

    const menuDiv = this.createMenu();
    app.appendChild(menuDiv.element);
    app.appendChild(header.element);

    const plusButton = new Button("plusButton", "plusButton material-symbols-outlined", "forms_add_on");
    plusButton.addListener(() => {
      this.toggleClassName("formEntries", "transition");
    });
    app.appendChild(plusButton.element);

    const form = this.createForm();
    app.appendChild(form.element);
    
    const warningDiv = this.createWarning();
    app.appendChild(warningDiv.element);
    
    const chart = this.createChart();
    app.appendChild(chart.element);
    app.appendChild(document.createElement("hr"));
    
    for (const mes of this.ano.meses) {
      const tableDiv = new Div(mes.nome, "tableDiv");
      const monthNameTitle = new h2("monthNameTitle", mes.nome);
      tableDiv.appendChild(monthNameTitle.element);

      const entryTable = this.createEntryTable(mes);
      tableDiv.appendChild(entryTable.element);
      tableDiv.appendChild(document.createElement("hr"));
      app.appendChild(tableDiv.element);
    }

    const begin = new Button("beginButton", "beginButton material-symbols-outlined", "keyboard_arrow_up");
    begin.addListener(() => {
      window.scrollTo(0, 0);
    });
    app.appendChild(begin.element);
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
        menuDiv.appendChild(menuLinkMes.element);
        menuLinkMes.addListener(() => {
          this.toggleClassName("menuDiv", "transition");
        });
      }
      return menuDiv;
  }

  createForm() {
    const form = new Div("formEntries", "formEntries");
    this.mesSelect = new Select("mes", "inputSelectForm");
    for (const mes of this.ano.meses) {
      this.mesSelect.addOption(mes.nome, "optionForm");
    }

    this.tipoSelect = new Select("tipo", "inputSelectForm");
    this.tipoSelect.addOption("receita","optionForm");
    this.tipoSelect.addOption("despesa","optionForm");

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

    form.appendChild(this.mesSelect.element);
    form.appendChild(this.tipoSelect.element);
    form.appendChild(this.categoriaInputText.element);
    form.appendChild(this.valorInputNumber.element);
    form.appendChild(addEntryButton.element);
    form.appendChild(closeButton.element);
    return form;
  }

  createChart() {
    const chartDiv = new Div("chartDiv", "chartDiv");
    const chartNome = new h2("titleChart", "Gráfico Anual");
    const chart = new Chart();

    const maxValue = Math.max(...this.ano.meses.map(mes => mes.totalMensal.saldo));
    console.log(maxValue);
    const minValue = Math.min(...this.ano.meses.map(mes => mes.totalMensal.saldo));
    console.log(minValue);
    for (const mes of this.ano.meses) {
      chart.addBar(mes.totalMensal.saldo, mes.nome, minValue, maxValue);
    }
    chartDiv.appendChild(chartNome.element);
    chartDiv.appendChild(chart.element);
    return chartDiv;
  }

  createWarning() {
    const warningDiv = new Div("warningDiv", "warningDiv");
    warningDiv.element.classList.add("invisibleElement");
    const warningText = new h2("warningText", "Você tem certeza disso?");
    const warningButtonDiv = new Div("buttonDiv", "buttonDiv");
    const warningCancelButton = new Button(
      "cancelButton",
      "cancelButton",
      "Cancelar"
    );
    warningCancelButton.addListener(() => {
      this.toggleClassName("warningDiv", "invisibleElement");
    });
    const warningDeleteButton = new Button(
      "deleteButton",
      "deleteButton",
      "Deletar"
    );
   
    warningButtonDiv.appendChild(warningCancelButton.element);
    warningButtonDiv.appendChild(warningDeleteButton.element);
    warningDiv.appendChild(warningText.element);
    warningDiv.appendChild(warningButtonDiv.element);
    return warningDiv;
  }

  createEntryTable(mes) {
    const entryTable = new Table("entriesTable","entriesTable");
    entryTable.addRowTh("CATEGORIA", "VALOR");
        
    for (const lancamento of mes.lancamentos) {
      const deleteButtonTable = new Button("deleteButtonTable", "deleteButtonTable material-symbols-outlined", "delete");
      deleteButtonTable.addListener(() => {
        this.toggleClassName("warningDiv", "invisibleElement");
        
        const warningDelete = document.querySelector("#deleteButton");
        warningDelete.addEventListener("click", () => this.deletarLancamentos(mes, lancamento));
      });
        
      entryTable.addRowTd(
        "td",
        [
          lancamento.categoria,
          this.moneyFormat(lancamento.getValorString()),
        ],
        [deleteButtonTable]
      );
    }

    entryTable.addRowTh(
      "Juros",
      this.moneyFormat(mes.totalMensal.juros)
    );
    entryTable.addRowTh(
      "Rendimentos",
      this.moneyFormat(mes.totalMensal.rendimentos)
    );
    entryTable.addRowTh(
      "TOTAL MENSAL",
      this.moneyFormat(mes.totalMensal.saldo)
    );

    return entryTable;
  }
}
