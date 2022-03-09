//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

let tarjeta = document.getElementById('tarjeta')
tarjeta.classList.add('card')


//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

let logo = document.getElementById('logo')
logo.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png")


//3- Quitarle al titulo la clase que le está dando un formato feo

let titulo = document.querySelector('h1')
titulo.classList.remove('titulo-feo')

//4- Chequear si el link a youtube posee o no el atributo href

document.getElementById('link_youtube').hasAttribute('href')//true


//5- Obtener el href del link a wikipedia y mostrarlo por consola

document.getElementById('link_wikipedia').getAttribute('href')//'https://es.wikipedia.org/wiki/YouTube'


