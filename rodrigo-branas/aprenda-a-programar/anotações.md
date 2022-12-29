# Anotações referente ao curso "Aprenda a Programar"
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
  * var = <span style="color:red">**EVITAR SEMPRE USAR**</span>

  * let = permite reatribuição
  * const = não permite reatribuição.