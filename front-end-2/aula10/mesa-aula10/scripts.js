let inputNameReference = document.querySelector('#name')
let inputLastNameReference = document.querySelector('#lastName')
let buttonEnviarreference = document.querySelector('#btnEnviar')
let resReference = document.querySelector('#container_res')
let res2Reference = document.querySelector('#container_res2')
let res3Reference = document.querySelector('#container_res3')
let res4Reference = document.querySelector('#container_res4')
let res5Reference = document.querySelector('#container_res5')

buttonEnviarreference.addEventListener('click', function(e){
  e.preventDefault()

  let res1 = (inputNameReference.value).trim()
  resReference.innerHTML = res1

  let res2 = (inputNameReference.value).toUpperCase()
  res2Reference.innerHTML = res2

  let res3 = (inputNameReference.value).toLowerCase()
  res3Reference.innerHTML = res3

  let res4 = inputNameReference.value.concat(' ',inputLastNameReference.value)
  res4Reference.innerHTML = res4

  let res5 = res4.replaceAll('a', '@')
  res5Reference.innerHTML = res5

})