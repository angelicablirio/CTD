let valor1  = document.querySelector('#valor1')
let valor2  = document.querySelector('#valor2')
let btnSomar = document.querySelector('#somar')
let btnSubtrair = document.querySelector('#subtrair')
let btnMultiplicar = document.querySelector('#multiplicar')
let btnDividir = document.querySelector('#dividir')
let btnLimpar = document.querySelector('#clear')
let res = document.querySelector('p')


function somar(){
  res.innerHTML = Number(valor1.value) + Number(valor2.value)
}

function subtrair() {
  res.innerHTML = Number(valor1.value) - Number(valor2.value)
}

function multiplicar() {
  res.innerHTML = Number(valor1.value) * Number(valor2.value)
}

function dividir() {
  if (Number(valor2.value) === 0)
  {
      alert("Erro: Divisão por zero")
  }
  else {
    res.innerHTML = Number(valor1.value) / Number(valor2.value)
  }
}

function limpar(){
  valor1.value = ''
  valor2.value = ''
  res.innerHTML = ''
}

btnSomar.addEventListener('click', function(e){
  e.preventDefault()
  somar()
})

btnSubtrair.addEventListener('click', function(e){
  e.preventDefault()
  subtrair()
})

btnMultiplicar.addEventListener('click', function(e){
  e.preventDefault()
  multiplicar()
})

btnDividir.addEventListener('click', function(e){
  e.preventDefault()
  dividir()
})

btnLimpar.addEventListener('click', function(e){
  e.preventDefault()
  limpar()
})
