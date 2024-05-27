function saudacao () {

    let nomePessoa = prompt("digite o seu nome")

    let horaAtual = new Date().getHours()
    
    if (horaAtual > 6 && horaAtual < 13) {
    
        window.alert("bom dia " + nomePessoa)
    
    } else if (horaAtual >= 13 && horaAtual < 18) {
        window.alert("boa tarde " + nomePessoa)
    }
    
    
    else {
        window.alert("boa noite " + nomePessoa)
    }
}

// 

// saudacao()
function somar(numl, num2, num3) 

let soma = numl + num2 + num3
19
2
return soma
let resultado = somar(5, 16, 19) // 40
let resultado2 = somar(1, 1, 1) // 3
console.log("0 resultado é: " + resultado)
