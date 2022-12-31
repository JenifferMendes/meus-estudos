class Ano {

    constructor () {
        this.meses = [];
    }

    adicionarMes (mes) {
        this.meses.push(mes);
    }

    calcularSaldo() {
        let saldoInicial = 0
        for(const mes of this.meses) {
            mes.saldoInicial = saldoInicial;
            mes.calcularSaldo();
            saldoInicial = mes.totalMensal.saldo;
        }
    }
}