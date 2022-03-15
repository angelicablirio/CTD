let btnSubmit = document.querySelector('#btnSubmit')
let btnReset = document.querySelector('#btnReset')
let textReference = document.querySelector('#text')
let contador = 1
let titlePost = document.querySelector('#title_post')
let textArea = document.querySelector('textarea')

//Funçao para adicionar o placeholder no formulário
titlePost.addEventListener('click', function(){
  titlePost.setAttribute('placeholder', 'Insira o titulo do post')
})
textArea.addEventListener('click', function(){
  textArea.setAttribute('placeholder', 'Insira o texto do post')
})

//Função para contar quantas vezes uma tecla é pressionada
textReference.addEventListener('keydown', function(){
  if(contador < 2){
    textReference.innerHTML = `Você apertou a seta ${contador++} vez!`
  }else{
    textReference.innerHTML = `Você apertou a seta ${contador++} vezes!`
  }
})

//Função para verificar se a página foi carregada
window.onload = function() {
  console.log('Página carregada com sucesso!')
}

//Função para previnir o submit
btnSubmit.addEventListener('click', function(event){
  event.preventDefault
})

//Função para limpar os dados
btnReset.addEventListener('click', function(){
  titlePost.removeAttribute('placeholder')
  textArea.removeAttribute('placeholder')
  textReference.innerHTML = ''
  contador = 1
})