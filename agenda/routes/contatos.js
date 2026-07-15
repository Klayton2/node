const autenticar = require('../middlewares/autenticator');

//rota da página contatos
module.exports = (app) =>{
    const {contatos} = app.controllers;
    app.get('/contatos', autenticar, contatos.index);
    app.get('/contato/:id', autenticar , contatos.show);
    app.get('/contato', autenticar ,contatos.create);
    app.get('/contato/:id/editar', autenticar ,contatos.edit);
    app.get('/contato/:id', autenticar ,contatos.update);
    app.get('contato/:id',autenticar , contatos.destroy);
};