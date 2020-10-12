let contatos = require('../models/agenda-models');
const helpers = require('../helpers/agenda-helpers');


/*================== GET ==================*/

const getByName = (request, response) => {
    const nome = request.query.nome;
    const nomeProcurado = contatos.find(contato => contato.nome == nome);
    response.status(200).send(nomeProcurado);
}

const getByPhone = (request, response) => {
    const telefone = request.query.telefone;
    const telefoneProcurado = contatos.find(contato => contato.telefone == telefone);
    response.status(200).send(telefoneProcurado);
}

/*================== POST ==================*/

const criarContato = (request, response) => {
    const { nome, telefone, email, outrosTelefones } = request.body;

    const newContact = {
        id: helpers.criarNovoId(contatos),
        nome: nome,
        telefone: telefone,
        email: email,
        outrosTelefones: outrosTelefones
    }
    contatos.push(newContact);
    response.status(201).json(contatos)
}

/*================== PUT ==================*/

const atualizarContato = (request, response) => {
    const { id } = request.params;

    let contatoParaAtualizacao = contatos.find(contato => contato.id == id);

    //const indice = contatos.findIndex(contato => contato.id == id);
    const indice = contatos.indexOf(contatoParaAtualizacao)

    const propriedades = Object.keys(request.body);

    propriedades.forEach(propriedade => {
        contatoParaAtualizacao[propriedade] = request.body[propriedade];
    })

    contatos[indice] = contatoParaAtualizacao

    response.status(200).json(contatos);
    //console.log(`O contato de ${contatos[indice]} foi atualizado com sucesso`)
    // pegar cada propriedade do meu contato a ser atualizado e atribuir as propriedades que passei no body


}

/*================== PATCH ==================*/

const alterarCampo = (request, response) => {
    const { id } = request.params;
    const { email } = request.body;
    const contatoSelecionado = contatos.find( contato => contato.id == id);
    contatoSelecionado.email = email;

    response.status(200).json({mensagem: `O email foi atualizado`})

}

/*================== DELETE ==================*/

const deleteById = (request, response) => {
    const { id } = request.params;
    const contatosFiltrados = contatos.filter(contato => contato.id != id);
    contatos = contatosFiltrados
    response.status(204).send(contatos);

}

module.exports = {
    getByName,
    getByPhone,
    criarContato,
    atualizarContato,
    alterarCampo,
    deleteById
}