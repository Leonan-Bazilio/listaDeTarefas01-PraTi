// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require("prompt-sync")()

let sum = 0
let sumPeso = 0

while (true) {
  let num = parseFloat(prompt("Digite um número ou 0 para interromper: "))
  if (num === 0) {
    break
  }

  let peso = parseFloat(prompt("Digite o peso para o numero: "))
  if (peso <= 0) {
    console.log("Valor do peso invalido pois peso não pode ser menor do que 0")
    break
  }

  sum += num * peso
  sumPeso += peso
}

if (sum === 0 && sumPeso === 0) {
  console.log("Nenhum valor valido foi inserido para o cálculo da média.")
} else {
  console.log(`A média ponderada dos valores digitados é ${sum / sumPeso}.`)
}


