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
console.log(ano.meses);


function addElement (parent, elementType, text) {
    const element = document.createElement(elementType);
    if (text !== "" && text !== undefined && text !== null){
        element.innerHTML = text;
    }
    parent.appendChild(element);
}

function renderizar () {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }
    const painel = document.createElement("div");
    for (const mes of ano.meses) {
        addElement(painel,"h2", mes.nome);
        for( const lancamento of mes.lancamentos) {
            const detalhesLancamento = lancamento.categoria + " " + lancamento.tipo + " " + lancamento.valor;
            addElement(painel, "p", detalhesLancamento);
        }
        const saldo = "Total do mês é " + mes.totalMensal.saldo
        addElement(painel, "h3", saldo);
        painel.appendChild(document.createElement("hr"));
    }
    app.appendChild(painel)
}

renderizar();
function adicionarLancamentos() {
    const valor = document.getElementById("valor");
    const categoria = document.getElementById("categoria");
    const tipo = document.getElementById("tipo");
    const mes = document.getElementById("mes");
    ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, Number(valor.value)));
    ano.calcularSaldo();
    renderizar();
    document.getElementById("valor").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("mes").value = "";

}

const botao = document.getElementById("botao");
botao.addEventListener("click", adicionarLancamentos);

