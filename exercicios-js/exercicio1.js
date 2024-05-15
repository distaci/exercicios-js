// FOR
// 1. Imprimir números de 1 a 10 utilizando o loop for

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2. Imprimir números pares de 1 a 10.

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }


// 3. Faça um programa que imprima os números ímpares de 0 a 50;

// for (let i = 1; i < 50; i += 2) {
//     console.log(i);
// }


// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

// let numero = prompt("Digite um número para ver a tabuada:");
// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

// let a = 0, b = 1, temp;
// console.log(a);
// console.log(b);
// for (let i = 2; i < 10; i++) {
//     temp = a + b;
//     a = b;
//     b = temp;
//     console.log(temp);
// }

// WHILE
// 6. Imprimir números pares de 0 a 20 utilizando o loop while

// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }


//começa com let, variavel,while
// let variavel = 0, i = 1;
// while (i <= x) {
//
// }

//console.log(i)
//i+= x

// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.
// let soma = 0, i = 1;
// while (i <= 100) {
//   soma += i;
//   i++;
// }
// console.log(`Soma: ${soma}`);



//começa com let, variavel,while
// let variavel = 0, i = 1;
// while (i <= x) {
//
// }

//soma = soma+= i
//i++

// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

// let idade;
// do {
//   idade = prompt("Digite sua idade:");
//   if (idade >= 18) {
//     console.log("Você é maior de idade!");
//   } else {
//     console.log("Você é menor de idade, digite novamente.");
//   }
// } while (idade < 18);

// 9. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.
// var numero = 10;

//       while (numero >= 1) {
//         console.log(numero);
//         numero--;
//       }
// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numero;
do {
  numero = prompt("Digite um número (digite 0 para sair):");
} while (numero != 0);
 console.log ("Voce digitou 0. O programa foi encerrado")



