const express = require("express");
const app = express();
app.use(express.json());
app.use("/app", express.static("./client"));

const lancamentos = [
  { mes: "janeiro", categoria: "Salario", tipo: "receita", valor: 5000 },
  { mes: "janeiro", categoria: "Alimentacao", tipo: "despesa", valor: 1000 },
  { mes: "janeiro", categoria: "Transporte", tipo: "despesa", valor: 400 },
  { mes: "janeiro", categoria: "Internet", tipo: "despesa", valor: 170 },
  { mes: "janeiro", categoria: "Luz", tipo: "despesa", valor: 600 },
  { mes: "janeiro", categoria: "Agua", tipo: "despesa", valor: 150 },
  { mes: "janeiro", categoria: "Lazer", tipo: "despesa", valor: 300 },
  {
    mes: "janeiro",
    categoria: "Show do BTS e SKZ",
    tipo: "despesa",
    valor: 400,
  },
  {
    mes: "janeiro",
    categoria: "Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses",
    tipo: "despesa",
    valor: 400,
  },
  { mes: "fevereiro", categoria: "Salario", tipo: "receita", valor: 5000 },
  { mes: "fevereiro", categoria: "Alimentacao", tipo: "despesa", valor: 1500 },
  { mes: "fevereiro", categoria: "Transporte", tipo: "despesa", valor: 800 },
  { mes: "fevereiro", categoria: "Internet", tipo: "despesa", valor: 170 },
  { mes: "fevereiro", categoria: "Luz", tipo: "despesa", valor: 800 },
  { mes: "fevereiro", categoria: "Agua", tipo: "despesa", valor: 150 },
  { mes: "fevereiro", categoria: "Lazer", tipo: "despesa", valor: 200 },
  { mes: "fevereiro", categoria: "Show do BTS e SKZ",
    tipo: "despesa", valor: 600,},
  { mes: "marco", categoria: "Salario", tipo: "receita", valor: 5000 },
  { mes: "marco", categoria: "Alimentacao", tipo: "despesa", valor: 1500 },
  { mes: "marco", categoria: "Transporte", tipo: "despesa", valor: 800 },
  { mes: "marco", categoria: "Internet", tipo: "despesa", valor: 170 },
  { mes: "marco", categoria: "Luz", tipo: "despesa", valor: 800 },
  { mes: "marco", categoria: "Agua", tipo: "despesa", valor: 150 },
  { mes: "marco", categoria: "Lazer", tipo: "despesa", valor: 200 },
  { mes: "marco", categoria: "Show do BTS e SKZ", tipo: "despesa", valor: 600 },
  { mes: "abril", categoria: "Salario", tipo: "receita", valor: 5000 },

  { mes: "abril", categoria: "Show do BTS e SKZ", tipo: "despesa", valor: 600 },
  { mes: "maio", categoria: "Salario", tipo: "receita", valor: 5000 },
];

//leio
app.get("/api/lancamentos", function (req, res) {
   res.json(lancamentos); 
});

//escrevo
app.post("/api/lancamentos", function(req, res){
  const lancamento = req.body;
  lancamentos.push(lancamento);
  res.end();
});

app.listen(3000);