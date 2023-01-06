create database app;
create schema financas_pessoais;

create table financas_pessoais.lancamento (
    id_lancamento serial primary key,
    mes text,
    categoria text,
    tipo text,
    valor numeric
);
-- update financas_pessoais.lancamento set tipo='receita' where tipo='receitas';
-- select * from nomeschema.nometabela;
--  para procurar a tabela.
-- insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'alimentação', 'despesa', 1000);
-- comando para colocar valores na tabela.

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'alimentação', 'despesa', 1000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'Transporte', 'despesa', 400);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'Luz', 'despesa', 600);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'Lazer', 'despesa', 300);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'Show do BTS e SKZ', 'despesa', 400);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('janeiro', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);


insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Alimentação', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Luz', 'despesa', 1000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Lazer', 'despesa', 200);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Show do BTS e SKZ', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('fevereiro', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Alimentação', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Luz', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Lazer', 'despesa', 500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Show do BTS e SKZ', 'despesa', 1000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('marco', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Alimentação', 'despesa', 2000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Luz', 'despesa', 400);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Lazer', 'despesa', 200);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Show do BTS e SKZ', 'despesa', 600);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Alimentação', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Luz', 'despesa', 300);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Lazer', 'despesa', 200);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Show do BTS e SKZ', 'despesa', 600);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('abril', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

