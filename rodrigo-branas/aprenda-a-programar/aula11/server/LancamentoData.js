const Connection = require("./Connection");

class LancamentoData {
    
    constructor() {
        this.connection = new Connection();
    }

    async getLancamentos() {
        const lancamentos = await this.connection.query("select * from financas_pessoais.lancamento", []);
        return lancamentos;
    }

    async saveLancamentos (lancamento) {
        await this.connection.query("insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ($1, $2, $3, $4)", [lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor]);
    }
}

module.exports = LancamentoData;