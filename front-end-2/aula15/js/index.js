const cardRef = document.querySelector('.card')
const btnRandom = document.querySelector('#random')

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
const obterUsuario = () => {
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        renderizarDadosUsuario(data.results[0])
    });

function renderizarDadosUsuario(dados) {

        cardRef.innerHTML = `
        <img src="${dados.picture.large}">
        <h1>${dados.name.first}</h1>
        <p>${dados.email}</p>
    `
    }
}

btnRandom.addEventListener('click', (e) => {
    e.preventDefault()
    obterUsuario()
})

    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.



/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.