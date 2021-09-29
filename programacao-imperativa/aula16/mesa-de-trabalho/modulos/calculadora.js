function Calculadora() {
  
    var valorAcumulado = 0;
    
    /**
     * Calcula múltiplos valores conforme a função de callback.
     * 
     * @param {number[]} valores Valores que deverão ser calculados.
     * @param {(valores:number[])=>number} operacaoRetorno Função responsável pela operação matemática.
     * 
     * @return {number} Resultado da operação matemática.
     */
    this.calcular = function (valores, operacaoRetorno) {
        return operacaoRetorno(valores);
    }
    
    this.somar = function (valores) {
        var resultadoDaSomaDeValores = valores.reduce( (valorAcumula, valorAtual) => valorAcumula + valorAtual );
        return resultadoDaSomaDeValores;
    }
    
    this.multiplicar = function (valores) {
        var resultadoDaMultiplicacaoDeValores = valores.reduce( (valorAcumula, valorAtual) => valorAcumula * valorAtual );
        return resultadoDaMultiplicacaoDeValores;
    }

    this.subtrair = function (valores) {
        var resultadoDaSubtracaoDeValores = valores.reduce( (valorAcumula, valorAtual) => valorAcumula - valorAtual );
        return resultadoDaSubtracaoDeValores;
    }
    
    this.dividir = function (valores) {
        var resultadoDaDivisaoDeValores = valores.reduce( (valorAcumula, valorAtual) => valorAcumula / valorAtual );
        return resultadoDaDivisaoDeValores;
    }
    
}

module.exports = Calculadora;