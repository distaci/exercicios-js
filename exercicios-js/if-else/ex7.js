// Solicita o valor total da compra ao usuário
var valorTotal = parseFloat(prompt("Digite o valor total da compra:"));

// Aplica o desconto de acordo com o valor total da compra e exibe o valor final
if (valorTotal <= 100.00) {
  console.log("Valor final da compra: R$ " + valorTotal.toFixed(2) + " (sem desconto)");
} else if (valorTotal <= 200.00) {
  var desconto = valorTotal * 0.10;
  var valorFinal = valorTotal - desconto;
  console.log("Valor final da compra: R$ " + valorFinal.toFixed(2) + " (desconto de 10%)");
} else {
  var desconto = valorTotal * 0.20;
  var valorFinal = valorTotal - desconto;
  console.log("Valor final da compra: R$ " + valorFinal.toFixed(2) + " (desconto de 20%)");
}