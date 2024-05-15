// Exercicio 1: Verificacão de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. 
//Verifique se o nome de usuário é "admin" e a senha e "senha123".
// Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

let username = prompt("Digite um nome de usuário: ");

let senha = prompt("digite a sua senha");


if (username == "admin" && senha == "senha123"){
    console.log("login bem sucedido!")
}
else {
    console.log("voce nao tem permissao de acesso!")
}