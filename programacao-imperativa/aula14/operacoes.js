        var DadosDaConta = require(`./modulos/dados-da-conta`);

        var novaConta = new DadosDaConta ('Angelica Lirio', 1234, 123456, 2000);

        var operacoes = {

            verificarSaldo: function(){
                return `Seu saldo é de R$ ${novaConta.saldoAtual}`
            },

            depositar: function(valorDoDeposito) {
                novaConta.saldoAtual += valorDoDeposito
                return `Agora seu saldo atual é de R$ ${novaConta.saldoAtual}`
            },
            sacar: function(valorDoSaque) {
                var temSaldoParaOSaque = novaConta.saldoAtual >= valorDoSaque;

                if(temSaldoParaOSaque) {

                    novaConta.saldoAtual -= valorDoSaque;
                    return `Você realizou um saque de R$ ${valorDoSaque}. Agora seu Saldo Atual é de R$ ${novaConta.saldoAtual}.`;
                }
                else {
                  
                    return `Saldo insuficiente! Seu Saldo Atual é de R$ ${novaConta.saldoAtual}.`;
                }
            }
        }

        console.log(operacoes.verificarSaldo());
        console.log(operacoes.depositar(100));
        console.log(operacoes.sacar(200));