let escolhaUsuario
let escolhaBot
let placar = {
  jogador: 0,
  maquina: 0
}

function obterEscolhaUsuario() {
  let escolha = parseInt(prompt('1-Pedra, 2-Papel, 3-Tesoura'))

  if(escolha > 0 && escolha < 4) {
      escolhaUsuario = escolha
  } else {
      alert('Por favor, forneça um número de 1 à 3')
      obterEscolhaUsuario()
  }
}

function verificaResultado(){
  if(escolhaUsuario === escolhaBot){
    alert('Empatou!')

  }else {
    if(
    (escolhaBot === 1 && escolhaUsuario === 3) ||
    (escolhaBot === 2 && escolhaUsuario === 1) ||
    (escolhaBot === 3 && escolhaUsuario === 2) )
    {
      alert('Perdeu!')
      placar.maquina++

    }else {
      alert('Ganhou!')
      placar.jogador++
  } }
}

function iniciar(){
  obterEscolhaUsuario()

  escolhaBot = parseInt(Math.random()*3+1)

  verificaResultado()
  verificaGanhador()
}

function limparPlacar() {

  placar.jogador = 0
  placar.maquina = 0

}

function verificaGanhador() {

  if(placar.jogador === 2) {

      alert('Parabéns, voce é o ganhador :)')
      finalizarJogo()

  } else if(placar.maquina === 2) {

      alert('Não foi dessa vez... programaram o bot no hard :(')
      finalizarJogo()

  } else {

      iniciar()
  }
}

function finalizarJogo() {

  limparPlacar()

  let desejaContinuar = confirm('Deseja jogar novamente?')

  if(desejaContinuar) {

      iniciar()

  } else {

      alert('Obrigado por jogar!')

  }
}

iniciar()





