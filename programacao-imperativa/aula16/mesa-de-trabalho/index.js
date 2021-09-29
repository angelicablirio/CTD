/*
    Atividade: Crie uma calculadora

    Atividade I: Crie operações matemática para a calculadora.
    O controlador deve ser capaz de:
    ( x ) Multiplicar;
    ( x ) Dividir;
    ( x ) Somar;
    ( x ) Subtrair.
    
    Obs.: Crie um módulo chamado operações.js contendo as funções de callback.

    Atividade II: Crie uma função para resetar a calculadora.
    (  ) A função deve ser capaz de zerar o valor acumulado.
    (  ) Crie a documentação da função utilizando JavaDoc.

    Atividade Bônus: Crie uma função para guardar as operações matemáticas
    (  ) A função deve guardar cada operação matemática e retornar as operações acumuladas.
    (  ) Imprima na tela as operações matemáticas realizada com o resultado final.
    (  ) Crie a documentação da função utilizando JavaDoc.

    Exemplo: 2 * 2 + 3 / 4 - 1 = 0.75

*/

const Calculadora = require('./modulos/calculadora');

const app = new Calculadora();

console.log('Somar:', app.calcular([10,9], app.somar));
console.log('multiplicar:', app.calcular([2,4], app.multiplicar));
console.log('subtrair:', app.calcular([6,2], app.subtrair));
console.log('dividir:', app.calcular([7,2], app.dividir));

