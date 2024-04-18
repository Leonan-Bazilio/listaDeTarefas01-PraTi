// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let count = 0
let num = 101

while (count < 50) {
  let divider = 2
  let isPrime = true

  //usaria o Math.sqrt envez de dividir por 2 na proxima linha, mas como é pra usar so oq foi passado n usei
  while (divider <= num / 2) {
    if (num % divider === 0) {
      isPrime = false
      break
    }
    divider++
  }
  if (isPrime) {
    console.log(num)
    count++
  }
  num++
}
