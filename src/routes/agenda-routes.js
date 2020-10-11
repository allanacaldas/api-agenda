const express = require('express');
const router = express.Router();

const agendaController = require("../controller/agenda-controller")

/*
@route GET agenda
@desc Retornar todos os contatos cadastrados no nosso models pelo name
@acess Public
@endpoint http://localhost:porta/agenda/nome
*/

router.get('/agenda/nome', agendaController.getByName);
/*
@route GET agenda
@desc Retornar todos os contatos cadastrados no nosso models pelo telefone
@acess Public
@endpoint http://localhost:porta/agenda/telefone
*/

router.get('/agenda/telefone', agendaController.getByPhone);

/*
@route POST agenda
@desc Criar um contato na agenda
@acess Public
@endpoint http://localhost:porta/agenda

*/

router.post('/agenda', agendaController.criarContato)

/*
@route
@desc
@acess
@endpoint
*/

router.put('/agenda/:id',agendaController.atualizarContato)

/*
@route DELETE agenda
@desc Deletar um item pelo ID
@acess Public
@endpoint http://localhost:porta/agenda/:id
*/
router.delete('/agenda/:id', agendaController.deleteById)

module.exports = router;