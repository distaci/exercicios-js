
// Recebe um número do usuário
var numero = parseInt(prompt("Digite um número:"));

// Verifica se o número é par ou ímpar e informa o usuário
if (numero % 2 === 0) {
  console.log(numero + " é um número par.");
} else {
  console.log(numero + " é um número ímpar.");
}