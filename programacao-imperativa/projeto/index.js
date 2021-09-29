//Importar o módulo express
const express = require ('express');

const CadastrarProfessor = require('./cadastrar');

//Inicializar o construtor do express
const aplicativo = new express();

//Interceptador
aplicativo.use(express.json()); //Converter os valores do formulário em JSON
aplicativo.use(express.urlencoded({extended: true})); //Certificar que o JSON será entregue como objeto literal

//Criando rota e retornando um arquivo HTML
//Get estou pedindo algo
aplicativo.get('/', (_, respostaDoServidor) => respostaDoServidor.sendFile(__dirname + '/cadastrar.html'));

//Criar uma rota para receber os dados do formulário
//Post estou enviando algo
aplicativo.post('/cadastrar', (requisicaoAoServidor, respostaDoServidor) => {
    //separar os atributos do objeto
    const {nome, sobrenome} = requisicaoAoServidor.body;
    //cadastrar o nome do professor no arquivo JSON
    new CadastrarProfessor (nome, sobrenome);

    respostaDoServidor.send('Cadastrou!')

});

//Inicializar o servidor
aplicativo.listen(8088, () => console.log('O servidor está funcionando'));