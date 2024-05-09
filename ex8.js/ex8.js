// Solicita ao usuário seu peso em quilogramas e sua altura em metros
var peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
var altura = parseFloat(prompt("Digite sua altura em metros:"));

// Calcula o Índice de Massa Corporal (IMC)
var imc = peso / (altura * altura);

// Exibe a faixa de peso em que o usuário se encontra, de acordo com o IMC calculado
if (imc < 18.5) {
  console.log("Seu IMC é " + imc.toFixed(2) + ": Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Seu IMC é " + imc.toFixed(2) + ": Peso normal");
} else if (imc >= 25.0 && imc <= 29.9) {
  console.log("Seu IMC é " + imc.toFixed(2) + ": Sobrepeso");
} else if (imc >= 30.0 && imc <= 34.9) {
  console.log("Seu IMC é " + imc.toFixed(2) + ": Obesidade grau 1");
} else if (imc >= 35.0 && imc <= 39.9) {
  console.log("Seu IMC é " + imc.toFixed(2) + ": Obesidade grau 2");
} else {
  console.log("Seu IMC é " + imc.toFixed(2) + ": Obesidade grau 3");
}
