class Mes {
    constructor(nome) {
        if (nome === "") {
            throw new Error("Mês precisa de um nome");
        }
        this.nome = nome;
        this.saldoInicial = 0;
        this.totalMensal = { saldo: 0, receita: 0, despesa: 0, juros: 0, rendimentos: 0, distribuicao: 0 };
        this.lancamentos = [];
    }

    arredondar(saldo) {
        return Math.round(saldo * 100) / 100;
    }

    adicionarLancamentos (lancamento) {
        this.lancamentos.push(lancamento);
    }

    calcularRendimento () {
        return this.totalMensal.saldo * 0.005;
    }

    calcularDivida () {
        return this.totalMensal.saldo * 0.01;
    }

    gastoPorCategoria () {
        this.totalMensal.distribuicao= [];
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                const percentual = this.arredondar((lancamento.valor * 100) / this.totalMensal.despesa);
                this.totalMensal.distribuicao.push({ categoria: lancamento.categoria, percentual });
            }
        }   
    }

    calcularSaldo () {
        this.totalMensal = { saldo: 0, receita: 0, despesa: 0, juros: 0, rendimentos: 0, distribuicao: 0 };
        this.totalMensal.saldo = this.saldoInicial;
        this.apurarReceitas();
        this.apurarDespesas();
        this.gastoPorCategoria();
        this.apurarRendimentos();
        this.apurarJuros();
    }

    apurarReceitas () {
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "receita") {
                this.totalMensal.saldo += lancamento.valor;
                this.totalMensal.receita += lancamento.valor;
            }
        }
    }

    apurarDespesas () {
        for (const lancamento of this.lancamentos) 
            if (lancamento.tipo === "despesa") {
                this.totalMensal.saldo -= lancamento.valor;
                this.totalMensal.despesa += lancamento.valor;
            }
    }

    apurarRendimentos () {
        if (this.totalMensal.saldo > 0) {
            this.totalMensal.rendimentos = this.arredondar(this.calcularRendimento());
            this.totalMensal.saldo = this.arredondar(this.totalMensal.saldo += this.totalMensal.rendimentos);
            return this.totalMensal;
        }
    }

    apurarJuros () {
        if (this.totalMensal.saldo < 0) {
            this.totalMensal.juros = this.arredondar(this.calcularDivida());
            this.totalMensal.saldo = this.arredondar(this.totalMensal.saldo += this.totalMensal.juros);
            return this.totalMensal;
        }
    }

    
}