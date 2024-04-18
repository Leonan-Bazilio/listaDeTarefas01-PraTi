// 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.

const prompt = require("prompt-sync")()

let n1 = parseInt(prompt("digite o primeiro numero: "))
let n2 = parseInt(prompt("digite o segundo numero: "))
let n3 = parseInt(prompt("digite o terceiro numero: "))
let n4 = parseInt(prompt("digite o terceiro numero: "))

n1 += 25
n2 *= 3
n3 *= 0.12
n4 = n1 + n2 + n3


console.log("Resultado das operações:");
console.log("1º numero + 25 é: " + n1);
console.log("o triplo do 2º numero é:  " + n2);
console.log("12% do 3º numero é:" + n3);
console.log("A soma dos valores originais dos três primeiros números é: " + n4);
