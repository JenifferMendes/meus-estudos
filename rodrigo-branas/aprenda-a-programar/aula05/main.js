//Janeiro
const janeiro = new Mes("Janeiro", 0)
janeiro.adicionarLancamentos(new Lancamento("Salario", "receita", 5000));
janeiro.adicionarLancamentos(new Lancamento("Alimentacao", "despesa", 1000));
janeiro.adicionarLancamentos(new Lancamento("Transporte", "despesa", 400));
janeiro.adicionarLancamentos(new Lancamento("Internet", "despesa", 170));
janeiro.adicionarLancamentos(new Lancamento("Luz", "despesa", 600));
janeiro.adicionarLancamentos(new Lancamento("Agua", "despesa", 150));
janeiro.adicionarLancamentos(new Lancamento("Lazer", "despesa", 300));
janeiro.adicionarLancamentos(new Lancamento("Show do BTS e SKZ", "despesa", 400));
janeiro.calcularSaldo();
console.log(janeiro);
// Fevereiro
const fevereiro = new Mes("Fevereiro", janeiro.totalMensal.saldo)
fevereiro.adicionarLancamentos(new Lancamento("Salario", "receita", 5000));
fevereiro.adicionarLancamentos(new Lancamento("Alimentacao", "despesa", 1500));
fevereiro.adicionarLancamentos(new Lancamento("Transporte", "despesa", 800));
fevereiro.adicionarLancamentos(new Lancamento("Internet", "despesa", 170));
fevereiro.adicionarLancamentos(new Lancamento("Luz", "despesa", 800));
fevereiro.adicionarLancamentos(new Lancamento("Agua", "despesa", 150));
fevereiro.adicionarLancamentos(new Lancamento("Lazer", "despesa", 200));
fevereiro.adicionarLancamentos(new Lancamento("Show do BTS e SKZ", "despesa", 600));
fevereiro.calcularSaldo();
console.log(fevereiro);
// Março
const marco = new Mes("Março", fevereiro.totalMensal.saldo)
marco.adicionarLancamentos(new Lancamento("Salario", "receita", 5000));
marco.adicionarLancamentos(new Lancamento("Alimentacao", "despesa", 1500));
marco.adicionarLancamentos(new Lancamento("Transporte", "despesa", 800));
marco.adicionarLancamentos(new Lancamento("Internet", "despesa", 170));
marco.adicionarLancamentos(new Lancamento("Luz", "despesa", 800));
marco.adicionarLancamentos(new Lancamento("Agua", "despesa", 150));
marco.adicionarLancamentos(new Lancamento("Lazer", "despesa", 200));
marco.adicionarLancamentos(new Lancamento("Show do BTS e SKZ", "despesa", 600));
marco.calcularSaldo();
console.log(marco);