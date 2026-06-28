//controlador da página contatos
module.exports = (app) => {
    const contatoController = {
        index(req, res) {
            const {usuario} = req.session;
            const {contatos} = usuario;
            res.render('contatos/index', {usuario});
        },
        create(req,res){
            const {contato} = req.body;
            const {usuario} = req.session;
            usuario.contatos.push(contato);
            res.redirect('/contatos');
        },
    };
    return contatoController;
};