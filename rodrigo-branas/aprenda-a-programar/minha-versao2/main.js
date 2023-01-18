const Connection = require("./server/Connection");
const HttpServer = require("./server/HttpServer");
const LancamentoController = require("./server/LancamentoController");
console.log(Connection);
const LancamentoData = require("./server/LancamentoData");

const connection = new Connection();
const lancamentoData = new LancamentoData(connection);
const httpServer = new HttpServer();
new LancamentoController(httpServer, lancamentoData);
httpServer.listen(3333);