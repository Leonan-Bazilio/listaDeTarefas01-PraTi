// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")()

let num1 = prompt("escreva um numero: ");
let count = 0
while (count < 10) {
  console.log(num1)
  count++
}