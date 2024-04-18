// Utilizar somente while do exercício 14 ao 16
// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")()

let num1 = parseFloat(prompt("escreva um numero: "));
let count = 0
let sum = 0
while (num1 !== 0) {
  sum += num1
  count++
  num1 = parseFloat(prompt("escreva um numero: "));
}
if (count === 0) {
  console.log("nenhum valor valido foi inserido para o calculo da media")
} else {
  console.log(`voce digitou ${count} valores e a media deles é ${sum / count}`)
}