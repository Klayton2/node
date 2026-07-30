const autenticar = require('../middlewares/autenticator');

//rota da página contatos
module.exports = (app) =>{
    const {contatos} = app.controllers;
    //Listar contato
    app.get('/contatos', autenticar, contatos.index);
    //Exibir contato
    app.get('/contato/:id', autenticar , contatos.show);
    //Criar contato
    app.post('/contato', autenticar ,contatos.create);
    //Atualizar contato
    app.put('/contato/:id', autenticar ,contatos.update);
    //Exluir contato
    app.delete('/contato/:id',autenticar , contatos.destroy);
};