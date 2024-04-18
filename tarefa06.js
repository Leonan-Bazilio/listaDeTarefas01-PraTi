// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")()

let ladoTriangulo1 = parseInt(prompt("Digite o primeiro lado do triangulo "));
let ladoTriangulo2 = parseInt(prompt("Digite o segundo lado do triangulo "));
let ladoTriangulo3 = parseInt(prompt("Digite o terceiro lado do triangulo "));

if (ladoTriangulo1 < ladoTriangulo2 + ladoTriangulo3 && ladoTriangulo2 < ladoTriangulo1 + ladoTriangulo3 && ladoTriangulo3 < ladoTriangulo1 + ladoTriangulo2) {

  if (ladoTriangulo1 == ladoTriangulo2 == ladoTriangulo3) {
    console.log("É um triângulo equilátero: possui todos os lados iguais")
  }
  else if (ladoTriangulo1 == ladoTriangulo2 || ladoTriangulo1 == ladoTriangulo3 || ladoTriangulo2 == ladoTriangulo3) {
    console.log("É um triângulo isósceles: possui dois lados iguais")
  } else {
    console.log("É um triângulo escaleno: possui todos os lados diferentes")
  }
} else {
  console.log("Por causa do tamanho dos lados não é possivel formar um triangulo")
}