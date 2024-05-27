// Solicita o ano de nascimento da pessoa
var anoDeNascimento = parseInt(prompt("Digite o ano de nascimento:"));

// Obtém o ano atual
var anoAtual = new Date().getFullYear();

// Calcula a idade da pessoa
var idade = anoAtual - anoDeNascimento;

// Verifica se a pessoa é maior de 18 anos e exibe a mensagem correspondente
if (idade >= 18) {
  console.log("A pessoa é maior de idade.");
} else {
  console.log("A pessoa é menor de idade.");
}
