let contatos = require('../models/agenda-models');
const helper = require('../helpers/agenda-helpers');


const getByName = (request, response) => {
    const nome = request.query.nome;
    const nomeProcurado = contatos.find(contato => contato.nome == nome)
    response.status(200).send(nomeProcurado)
}

const getByPhone = (request, response) => {
    const telefone = request.query.telefone;
    const telefoneProcurado = contatos.find(contato => contato.telefone == telefone)
    response.status(200).send(telefoneProcurado)
}

const criarContato = (request, response) => {
    const { nome, telefone, email, outrosTelefones } = request.body;

    const newContact = {
        id: 1,
        nome: nome,
        telefone: telefone,
        email: email,
        outrosTelefones: outrosTelefones
    }
    contatos.push(newContact);
    response.status(201).json(contatos)
}

const atualizarContato = (request, response) => {
    const { id } = request.params;

    let contatoParaAtualizacao = contatos.filter( contato => contato.id == id);
    //const indice = agenda.findIndex(contato => contato.id == id);
    //const indice = contatos.indexOf(contatoParaAtualizacao)

    const propriedades = Object.keys(request.body);
    const { nome } = request.body;
    console.log(nome);

    

    // propriedades.forEach(propriedade => {
    //      contatos[indice].nome = propriedade;
    //      contatos[indice].telefone = propriedade.telefone;
    //      contatos[indice].email = propriedade.email;
    //     contatos[indice].outrosTelefones = propriedade.outrosTelefones

    // }) 

    response.status(200).json(nome)
    // pegar cada propriedade do meu contato a ser atualizado e atribuir as propriedades que passei no body


}


const deleteById = (request, response) => {
    const { id } = request.params;
    const contatosFiltrados = contatos.filter(contato => contato.id !=id )
    contatos = contatosFiltrados
    response.status(204).send(contatos)

}

module.exports = {
    getByName,
    getByPhone,
    criarContato,
    atualizarContato,
    deleteById
}