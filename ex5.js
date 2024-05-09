// Solicita três números ao usuário
var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
var num3 = parseFloat(prompt("Digite o terceiro número:"));

// Verifica se os números estão em ordem crescente e exibe a mensagem correspondente
if (num1 < num2 && num2 < num3) {
  console.log("Os números estão em ordem crescente.");
} else {
  console.log("Os números não estão em ordem crescente.");
}
