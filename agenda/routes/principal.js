module.exports = (app)=> {
    const {principal} = app.controllers;
    app.get('/',principal.index);
};

module.exports = (app)=>{
    const {principal} = app.controllers;
    app.get('/', principal.index);
    app.post('/entrar', principal.index);
    app.get('/sair', principal.index);
};