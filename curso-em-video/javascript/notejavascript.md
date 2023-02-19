# Anotações referente ao curso 'JavaScript' - **Em Atualização!!!**


## Documentação

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[EcmaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

## Tipos
typeof

## Primeiros comandos

`window.alert()`

`window.confirm()`

`window.prompt()`


## comentários

```js
// comentario em uma linha
/* comentario 
em 
varias
linhas
*/
``` 

## Variáveis
```js
var nomeVariavel;
let nomeVariavel;
const nomeVariavel;
```

nomes de variáveis:

- Podem começar com letras, $ ou _
- Não pode começar com números
- É possível usar letras ou números
- É possível usar usar acentos e símbolos
- não pode conter espaços
- não podem ser palavras reservadas
- Maiusculo e minusculo fazem diferença
- tente escolher nomes coerentes para as variáveis

Primitivos:
- Number
  - Infinity
  - NaN
- String
- Boolean
- Null
- undefined
- object
- function


Existem 3 formas de delimitar uma string usando `""`, `''` ou ` `` `;
  
(number + number) = adição  
(string + string) = concatenação

## Number

### Formatando Number


number.toFixed(n) -> retorna o numero arredondado
- caso sem valor, não terá parte fracionária
- se tiver valor, o número será retornado com a mesma quantidade de decimais.


exemplo:
```js
var numObj = 12345.6789;

numObj.toFixed();       // Retorna '12346': note o arredondamento, não possui nenhuma parte fracionária
numObj.toFixed(1);      // Retorna '12345.7': note o arredondamento
```
Para moeda br:  
number.toLocaleString(`pt-BR`, {style: 'currency', currency: 'BRL'})

### String > Number  
Number.parseInt(n) -> Números inteiros  
Number.parseFloat(n) -> Números decimais
Number(n)

### Number > String

String(n)
n.toString(n)


## String
s.length -> quantos caracteres
s.toUpperCase() -> tudo para maiuscula
s.toLowerCase() -> tudo pra minusculo
s

## Formatando Strings
```js
var s = 'JavaScript'
'Estou aprendendo s' // não faz interpolação
'Eu estou aprendendo' + s // usa concatenação
`Eu estou aprendendo ${s}` // usa template string
```

replace(x, y) -> troca x por y.
## Terminal
obs: não esqueça de fechar os terminais: 
- no node ->  .exit
- terminal vscode -> exit
- Ctrl+L = Limpa o terminal do vscode