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