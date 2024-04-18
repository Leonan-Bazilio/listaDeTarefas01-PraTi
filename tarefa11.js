// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.

const prompt = require("prompt-sync")()

let num1 = prompt("escreva um numero: ");

while (num1 > 0) {
  if (num1 % 2 == 0) {
    console.log(`${num1} é PAR`)
  } else {
    console.log(`${num1} é IMPAR`)
  }
  num1 = prompt("escreva um numero: ");
}
