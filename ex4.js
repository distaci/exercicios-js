// Recebe as 4 notas do aluno
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
var nota4 = parseFloat(prompt("Digite a quarta nota:"));

// Calcula a média aritmética das notas
var media = (nota1 + nota2 + nota3 + nota4) / 4;

// Verifica a média e imprime a mensagem correspondente
if (media >= 7.0) {
  console.log("Média: " + media.toFixed(1) + " - APROVADO");
} else if (media >= 5.0) {
  console.log("Média: " + media.toFixed(1) + " - RECUPERAÇÃO");
} else {
  console.log("Média: " + media.toFixed(1) + " - REPROVADO");
}