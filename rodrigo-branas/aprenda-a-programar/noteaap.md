# Anotações referente ao curso "Aprenda a Programar" - **Em Atualização!!!**
Objetivo do curso: Criar uma aplicação voltado ao financeiro e entender a rotina de um programador, de forma simples.  
```
```
# aula 01 - variáveis, operadores e if/else
# aula 02 - funções, parâmetros e retorno
# aula 03 - arrays, objetos e for
# aula 04 - classes, construtores e exceptions

* Class
  ```javascript
  
  class Bolo {

    constructor (ovo, xicaraDeLeite, colherDefermento, sabor, cobertura ) {
        if (typeof ovo !== "number" || ovo < 0) {
            throw new Error("Quantidade de ovos inexistente")
        }
        if (typeof sabor !== "string") {
            throw new Error("O bolo precisa de um sabor")
        }

        this.ovos = ovos
        this.xicaraDeLeite = xicaraDeLeite
        this.colherDeFermento = colherDefermento
        this.sabor = sabor
        this.cobertura = cobertura
    }

  }
  novoBolo1 = new Bolo(3, 1, 1, "cenoura", "chocolate")
  novoBolo2 = new Bolo(4, 2, 2, "fuba", "chantilly")

  ```
# aula 05 - OO, Métodos e Encapsulamento 

  ## variáveis:
  * var = **EVITAR SEMPRE USAR**
  * let = permite reatribuição
  * const = não permite reatribuição.
  
  this.qualquercoisa = qualquer coisa (estado interno dele na class)
  para chamar metodos dentro da class, você precisa usar o this também.
  
  ### Exercício referente a aula:
  - [x] Colocar *const* onde precisa no código.
  - [x] colocar ; depois de instruções (opcional, mas use).
  - [x] criar a class Mes.
  - [x] teste no final com o valor do mês.
  - [x] arrumar as funções na class mes.
  - [x] separar em lancamento, mes, util, teste, index(dados) em outras "abas" e importar para o arquivo index.
  - [x] otimizar os metodos dentro da class mes.
  
  # aula 06 - manipulando a DOM

` pai.appendChild(filho)`  
adiciona um "filho" no final do elemento pai;
para aplicar estilo, você tem que 'fingir' que o elemento já existe.

https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild


VSCode  
dica: selecione a variavel que você deseja trocar o nome, aperte f2, coloque o outro nome que deseja renomear.

Exercícios referentes a aula:
- [ ] adicionar ;
- [x] ver o saldoInicial
- [x] totalMensal dentro do calculoSaldo
- [x] criar class Ano
- [ ] scripts no head;(deixar por ultimo)

# aula 07 - estilizando elementos com CSS

## ideias para melhorar a aplicação:
https://www.w3schools.com/howto/howto_js_tabs.asp

# aula 08 - Componentização.

# aula 09 - Frontend e Backend.

## Frontend
* apresentação
* usabilidade ?
* interação com usuário


## Backend
* regras de negócio
* mediação do armazenamento dos dados

terminal:
node oquevcquerquerode
ctrl + c = para tudo no terminal.

shift + tab = volta o espaço.
tab = vai o espaço.
shift + alt + f = formata bonitinho
ctrl + backspace apaga a palavra inteira
Shift + insert é o CTRL + V no terminal, caso seu CTRL + V não funcione
ctrl + seta = pula palavra
tab completa no terminal
ctrl+b = some a barra do lado aqui

node --watch server.js
ctrl j -abre e fecha o terminal
shift+alt + seta cima/baixo

# aula 10 - Banco de dados.

drop -> apaga a tabela.
delete -> apaga registro.

voltar na aula no tempo: 35:15 e tentar acessar o banco de dados via terminal // pesquisar e entender como funciona pro postgresql

// const [numminValue, nummaxValue] = [Number(minValue), Number(maxValue)];

# aula 11 - Definindo camadas e responsabilidades no backend.

responsabilidades:
* ponto de entrada da aplicação
* conexão com o banco de dados
* definição dos serviços da api (application programming interface)
* interação com o banco de dados
* configuração das rotas da api e abertura do servidor numa porta específica.


SRP - Single Responsibility Principle(evitar a fragilidade por conta das mudanças constantes e do acoplado que existe entre essas responsabilidades) 

Separe coisas que mudam por motivos diferentes.

DIP - Dependency Inversion Principle

High level modules should not depend on low level modules.


# aula 12 - Encerramento e Próximos passos.

cd .. - volta na pasta

## próximos passos:
- [ ] arrumar o CSS da aplicação
- [ ] Aprofundar o conhecimento na linguagem JS ou qualquer outra (analisa o mercado)
- [ ] aprenda um framework/library como react, vue.js e angular
- [ ] estudar o protocolo HTTP e entender os conceitos de API
- [ ]  Criar um projeto pessoal e publicar no GitHub(estudar Git)
- [ ]  Fazer networking, participar de meetups e eventos
- [ ]  tentar fazer entrevistas e entender seu nivel
- [ ]  Analise se faz sentindo fazer uma faculdade.
- [ ]  buscar um mentor, alguém que possa tirar dúvidas e te guiar nesse caminho
- [ ]  Descubra qual é o melhor método de estudo para você.
- [ ] métodos: cursos, ler livros e/ou artigos, aprneder a utilizar o stackoverflow.
- [ ] Entrar em campo
- [ ] Considere entrar em uma empresa de tecnologia por outra área(atendimento, implantação, vendas) e depois fazer uma transição
- [ ] Aprender sistemas operacionais, redes e banco de dados (cloud, containers,...)

---
# minha versão 

## próximos passos

- [ ] CSS  
     - [x] GRAFICO (GRAFICO POSITIVO/NEGATIVO)
       - [x] CORES
       - [x] FUNÇÃO
       - [x] OUTROS
       - [x] TORNAR os nomes do mes em 3 letras (JAN, FEV)
     - [x] TABELA
       - [x] CORES
       - [x] TAMANHO
       - [x] BOTÃO DELETE
       - [x] 3 coluna, resolver a parte dos th!
       - [x] arrumar as linhas da tabela
     - [x] BOTÃO DO MENU FAZER FUNCIONAR
     - [x] BOTÃO DO INICIO FAZER FUNCIONAR
       - [x] ICON
       - [x]GRAFICO, ANO: NOME DOS MESES
     - [x] APERTAR O BOTÃO DE + 
       - [x] ABRIR O PAINEL DE LANÇAMENTO
       - [x] janela para confirmar quando deletar o lancamento.
       - [x] separar a função de dar a classe invisivel.
     - [x] procurar uma fonte pra aplicação
     - [x] RESPOSIVO - A TRISTEZA
     - [ ] passar os nomes das coisas pra inglês.
  
### 12/01

- [x] TABELA
       - [x] arrumar as linhas da tabela
- [x] BOTÃO DO MENU FAZER FUNCIONAR ?? (só falta a função)
      - [x]GRAFICO, ANO: NOME DOS MESES
- [x] BOTÃO DO INICIO FAZER FUNCIONAR

css:
clamp(25px, 40px, 5vw)

### 13/01
- [x] janela para confirmar quando deletar o lancamento.

### 14/01
- [ ] GRAFICO (GRAFICO POSITIVO/NEGATIVO)
       - [x] FUNÇÃO
       - [x] OUTROS
       - [x] TORNAR os nomes do mes em 3 letras (JAN, FEV)
 - [x] RESPOSIVO - A TRISTEZA (só falta o grafico)

### 15/01
- [x] separar as CSS
- [x] arrumar linha hr
- [x] cores do grafico.
- [X] arrumar o menu para fechar quando clicar no mes.
- [x] separar a função de dar a classe invisivel.
- [x] icon menu e inicio (ver o que fazer)


### 16/01
- [x] animações do menu de descer devagar. aumentar o form do lançamento.
- [ ] passar os nomes das coisas pra inglês.
  - [ ] arrumado:
      * app
      * base
      * styles
  - [ ] falta arrumar:
    - [ ] domain, infra, services, main, backend
- [ ] arrumar o erro do form;
- [x] olhar o grafico com amor e carinho.

---
Nomes:
pt/en  
Mes = month  
ano = year  
lancamento/lancamentos = entry / entries (lancametion);  
grafico = chart  
tabela = table  
valor = value?  
formulario = form  
estilo = styles  
tela = screen???  
inicio = home? start? begin  
as



