const express = require("express");
const pgp = require("pg-promise");

const app = express();
app.use(express.json());
app.use("/app", express.static("./client"));

const connection = pgp()("postgres://postgres:luffy@localhost:5433/app");

app.get("/api/lancamentos", async function (req, res) {
   const lancamentos = await connection.query("select * from financas_pessoais.lancamento", []);
   res.json(lancamentos);
});

app.post("/api/lancamentos", async function(req, res){
  const lancamento = req.body;
  await connection.query("insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ($1, $2, $3, $4)", [lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor]);
  res.end();
});

app.listen(3000);
