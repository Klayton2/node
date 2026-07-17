const autenticar = require('../middlewares/autenticator');

//rota da página contatos
module.exports = (app) =>{
    const {contatos} = app.controllers;
    app.get('/contatos', autenticar, contatos.index);
    app.get('/contato/:id', autenticar , contatos.show);
    app.post('/contato', autenticar ,contatos.create);
    app.put('/contato/:id', autenticar ,contatos.update);
    app.delete('contato/:id',autenticar , contatos.destroy);
};