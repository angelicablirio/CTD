const inputNameReference = document.querySelector('#input-name')
const inputPasswordReference = document.querySelector('#input-password')
const btnEnviarReference = document.querySelector('#btnLogar')
const inputNomeMensagemErroReference = document.querySelector('#inputNomeMensagemErro')
const inputSenhaMensagemErroReference = document.querySelector('#inputSenhaMensagemErro')

btnEnviarReference.addEventListener('click', function(e){
  e.preventDefault()

  if(inputNameReference.checkValidity()){

    inputNameReference.classList.remove('campo-invalido')
    inputNomeMensagemErroReference.classList.remove('show')

  }else{

    inputNameReference.classList.add('campo-invalido')
    inputNomeMensagemErroReference.classList.add('show')

  } 

  if(inputPasswordReference.checkValidity()){
    inputPasswordReference.classList.remove('campo-invalido')
    inputSenhaMensagemErroReference.classList.remove('show')
  }else{
    inputPasswordReference.classList.add('campo-invalido')
    inputSenhaMensagemErroReference.classList.add('show')
  }

})