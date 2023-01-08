class LancamentoService {

    constructor () {

    }

    async getLancamento () {
        const response = await fetch("http://localhost:3000/api/lancamentos");
        return response.json();
    }
    async saveLancamento (lancamento) {
        await fetch("http://localhost:3000/api/lancamentos", { method: "post",
        headers: { "content-type": "application/json" },
         body:  JSON.stringify(lancamento)});
    }
    async deleteLancamento (idLancamento) {
        await fetch(`http://localhost:3000/api/lancamentos/${idLancamento}`, { method: "delete"});
    }
}