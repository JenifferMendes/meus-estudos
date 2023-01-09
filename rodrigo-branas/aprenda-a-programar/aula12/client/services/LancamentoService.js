class LancamentoService {

    constructor (httpClient, baseUrl) {
        this.httpClient = httpClient;
        this.baseUrl = baseUrl;

    }

    getLancamento () {
        return this.httpClient.get(`${this.baseUrl}/api/lancamentos`);
    }
    saveLancamento (lancamento) {
        return this.httpClient.post(`${this.baseUrl}/api/lancamentos`, lancamento);
    }
    deleteLancamento (idLancamento) {
        return this.httpClient.delete(`${this.baseUrl}/api/lancamentos/${idLancamento}`)
    }
}