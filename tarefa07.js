// 7. As maçãs custam R$ 0, 30 se forem compradas menos do que uma dúzia, e R$ 0, 25 se
// forem compradas pelo menos doze.Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()


let nMaca = parseInt(prompt("Digite a quantidade de macãs desejadas: "));
if (nMaca < 12) {
  console.log(`o preço de ${nMaca} maçãs é R$${nMaca * 0.30}`)
} else {
  console.log(`o preço de ${nMaca} maçãs é R$${nMaca * 0.25}`)
}