# Anotações referente ao curso 'Algoritmos e estruturas de dados em JavaScript' - **Em Atualização!!!**

## Comentário em JavaScript

Existem duas maneiras de fazer comentário em js:
- comentários em uma única linhas
- comentários em multiplas linhas

```js
// comentario em linha
/* comentário
em 
várias 
linhas
*/
```

## Variáveis em JavaScript

O JS fornece 8 tipos de dados diferentes:
- `undefined`
- `null`
- `boolean`
- `string`
- `symbol`
- `bigint`
- `number`
- `object`
  
Variáveis permitem aos computadores armazenar e manipular dados de forma dinâmica.

Variáveis de computador diferem das variáveis matemáticas porque elas podem armazenar valores em momentos diferentes.

## declarar variáveis em js:

utilizamos a palavra-chave `var`(ou `let`, ou `const`) na frente da variável. ex:

```js
var exemplo;
```
terminar uma instrução com ;

obs: nome de variáveis não podem conter espaço ou começar com um número.

operador de atribuição (=) 

Uma `string` literal, ou `string`, é uma série de 0 ou mais caracteres entre aspas simples ou duplas.

## Entender variáveis não inicializadas

Quando as variáveis de js são declaradas, elas têm um valor incial de `undefined`. Caso você faça uma operação matemática em uma variável `undefined`, o seu resultado será NaN(Not a Number = não é um número).

## camelCase

Nomes de variáveis com mais de uma palavra possuem a primeira palavra toda em minúscula e a primeira letra de cada palavra subsequente capitalizada.


*Prefira sempre `let`, use `const` e jamais use `var`.*

```js
(i++) == (i = i + 1;)
(i--) == (i = i - 1;)
```

obs: caso queira usar "" dentro de uma `string` utilize \ antes da "(`\"`) que estiver dentro da mesma para que a string não feche.

[parei aqui](https://www.freecodecamp.org/portuguese/learn/javascript-algorithms-and-data-structures/basic-javascript/quoting-strings-with-single-quotes)