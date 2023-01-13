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

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Alimentação', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Luz', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Lazer', 'despesa', 500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Show do BTS e SKZ', 'despesa', 1000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('março', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

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
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Luz', 'despesa', 400);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Lazer', 'despesa', 200);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Show do BTS e SKZ', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('maio', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Alimentação', 'despesa', 3000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Luz', 'despesa', 300);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Lazer', 'despesa', 200);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Show do BTS e SKZ', 'despesa', 1000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('junho', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Alimentação', 'despesa', 1000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Luz', 'despesa', 700);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Lazer', 'despesa', 100);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Show do BTS e SKZ', 'despesa', 900);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('julho', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Alimentação', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Luz', 'despesa', 500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Lazer', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Show do BTS e SKZ', 'despesa', 200);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('agosto', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Alimentação', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Luz', 'despesa', 700);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Lazer', 'despesa', 200);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Show do BTS e SKZ', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('setembro', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Alimentação', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Luz', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Água', 'despesa', 150);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Lazer', 'despesa', 300);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Show do BTS e SKZ', 'despesa', 1000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('outubro', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Alimentação', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Luz', 'despesa', 500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Água', 'despesa', 250);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Lazer', 'despesa', 300);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Show do BTS e SKZ', 'despesa', 1000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('novembro', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);

insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Salário', 'receita', 5000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Alimentação', 'despesa', 2000);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Transporte', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Internet', 'despesa', 170);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Luz', 'despesa', 800);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Água', 'despesa', 300);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Lazer', 'despesa', 200);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Show do BTS e SKZ', 'despesa', 1500);
insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ('dezembro', 'Curso Udemy - como ganhar 5k todo dia virando dev em 6 meses', 'despesa', 400);
