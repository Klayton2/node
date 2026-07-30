module.exports = (app)=>{
    const {principal} = app.controllers;
    //Login página incial
    app.get('/', principal.index);
    //Fazer login 
    app.post('/entrar', principal.index);
    //Fazer logout
    app.get('/sair', principal.index);
};