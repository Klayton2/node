//rota da página contatos
module.exports = (app) =>{
    const {contatos} = app.controllers;
    app.get('/contatos'), contatos.index;
    app.get('/contato/:id', contatos.show);
    app.get('/contato', contatos.create);
    app.get('/contato/:id/editar', contatos.edit);
    app.get('/contato/:id', contatos.update);
    app.get('contato/:id', contatos.destroy);
};