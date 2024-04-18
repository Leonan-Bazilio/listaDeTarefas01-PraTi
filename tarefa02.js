// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.


const prompt = require("prompt-sync")()

let votosEmBrancos = parseInt(prompt("digite qual foi a quantidade de votos em branco: "))
let votosNulos = parseInt(prompt("digite qual foi a quantidade de votos nulos: "))
let votosValidos = parseInt(prompt("digite qual foi a quantidade de votos validos: "))
let totalDeVotos = votosEmBrancos + votosNulos + votosValidos

let votosEmBrancosPorcentagem = votosEmBrancos / totalDeVotos * 100
let votosNulosPorcentagem = votosNulos / totalDeVotos * 100
let votosValidosPorcentagem = votosValidos / totalDeVotos * 100


console.log(`o total de votos foi ${totalDeVotos} sendo que entre eles ${votosEmBrancosPorcentagem}% foram em branco, ${votosNulosPorcentagem}% foram nulos e ${votosValidosPorcentagem}% foram validos`)