import { subtrair } from "./subtrair.js";
import { somar } from "./somar.js";
import { multiplicar } from "./multiplicar.js";
import { dividir } from "./dividir.js";

let operacao
let num1
let num2

function iniciar(){
    operacao = parseInt(prompt("Digite o número de qual operação você deseja realizar: 1 - somar, 2 - subtrair, 3 - multiplicar, 4 - dividir"))
    
    if(operacao > 0 && operacao <=4){
        num1 = parseInt(prompt("Digite o primeiro operando:"))
        num2 = parseInt(prompt("Digite o segundo operando:"))
    }else{
        alert('Por favor digite um número válido!')
        iniciar()
    }
}

function resultado (operacao, num1, num2){
    switch (operacao){
        case 1: 
            return somar(num1, num2)         
        case 2:
            return subtrair(num1, num2)
        case 3:
            return multiplicar(num1, num2)
        case 4:
            return dividir(num1, num2)
        default:
            return "Operacao inválida"
    }
}

iniciar()
alert ("Resultado: " + resultado(operacao, num1, num2))