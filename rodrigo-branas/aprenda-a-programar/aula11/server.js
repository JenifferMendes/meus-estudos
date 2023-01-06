const express = require("express");
const Connection = require("./server/Connection");
console.log(Connection);
const LancamentoData = require("./server/LancamentoData");

const connection = new Connection();
const lancamentoData = new LancamentoData();

const app = express();
app.use(express.json());
app.use("/app", express.static("./client"));

app.get("/api/lancamentos", async function (req, res) {
   const lancamentos = await lancamentoData.getLancamentos();
   res.json(lancamentos);
});

app.post("/api/lancamentos", async function(req, res){
  const lancamento = req.body;
  await LancamentoData.saveLancamentos(lancamento);
  res.end();
});

app.listen(3000);
