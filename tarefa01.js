// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")()
let grausCelsius = prompt("digite uma temperatura em graus Celsiu para converte-la em Fahrenheit: ")
let grausFahrenheit = grausCelsius * 1.8 + 32
console.log(grausFahrenheit)