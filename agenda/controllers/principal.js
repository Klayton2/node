module.exports = (app) => {
    const principalController = {
        index(req,res) {
            res.render('principal/index');
                },
                //verificaçao de login
            login(req, res){
                const {usuario} = req.body;
                const {email,senha} = usuario;
                if(email && senha) {
                    usuario.contatos = [];
                    req.session.usuario = usuario;
                    res.redirect('/contatos'); 
                }else {
                    res.redirect('/');
                }
            },
            //redirecionamento de logout
    logout(req, res){
        req.session.destroy();
        res.redirect('/');
    }
    };
    return principalController;
};