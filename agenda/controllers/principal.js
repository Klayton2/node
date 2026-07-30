module.exports = (app) => {
    const Usuario = app.models.usuario;

    const principalController = {
        index(req,res) {
            res.render('principal/index');
                },
                //verificaçao de login
            login(req, res){
                const {usuario} = req.body;
                const {email,senha} = usuario;
                
                const where = {email, nome};
                const set = {
                    $setOnInsert: {email, nome , contatos: []}
                };
                const options = {
                    upsert: true, runValidators: true, new: true
                };

                Usuario.findOneAndUpdate(where, set, options).select('email nome')
                .then((usaurio)=>{
                    req.session.usaurio = usaurio;
                    res.redirect('/contatos');
                })
            },
            //redirecionamento de logout
    logout(req, res){
        req.session.destroy();
        res.redirect('/');
    }
    };
    return principalController;
};