const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')


const routes = Router();
//Metodos Http
// get,post, put, delete
// get -> buscando informação
// post -> criar alguma informação
// put -> editar algum recurso
// delete -> deletar algo


// Tipo de parametros
// Query params: request.query(Filtros, ordenação, paginação,...)
// Route params: request.params(Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB Não-Relacional

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);

routes.get('/search',SearchController.index);

module.exports = routes;