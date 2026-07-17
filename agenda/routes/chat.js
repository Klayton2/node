const autenticar = require('../middlewares/autenticator');

module.exports = (app) =>{
    const {chat} = app.controllers;
    app.get('/chat',autenticar, chat.index);
};