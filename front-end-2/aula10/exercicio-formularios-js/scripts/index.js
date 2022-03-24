const registerBtn = document.querySelector(".register-btn");
const elementEmail = document.querySelector("#email-input");
const elementSenha = document.querySelector("#password-input");
const elementsMaiorIdade = document.getElementsByName("legalAge");
const elementTerms = document.querySelector("#tyc-input")
let usuario = {}


registerBtn.addEventListener("click", (e) => {
  e.preventDefault()

  usuario.email = elementEmail.value
  usuario.senha = elementSenha.value
  usuario.termos = elementTerms.checked

  for(let tipo of elementsMaiorIdade){
    if(tipo.checked){
      usuario.MaiorIdade = tipo.value
    }
  }



  console.log(usuario)
});


