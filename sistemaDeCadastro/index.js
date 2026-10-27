const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const Usuario = require('./models/Usuario');
const bcrypt = require('bcrypt');
const app = express();

const {engine} = require('express-handlebars');

//config
    //template engine
        app.engine('handlebars',engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //bodyParser

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    //express-session

    app.use(session({
        secret: 'secretKey',
        resave: false,
        saveUninitialized: false
    }));

//rotas

app.get('/login',(req,res)=>{
    res.render('layouts/login');
});

app.get('/cadastro',(req,res)=>{
    res.render('layouts/cadastro');
});

app.get('/home',(req,res)=>{
    if (!req.session.usuarioId) {
        res.redirect('/login');
    }
    res.render('layouts/home');

});

//pegando dados dos formularios

app.post('/cadastro', async (req,res)=>{
    try{
        const email = req.body.cad_email;
        const senha = req.body.cad_pass;
        const confirmarSenha = req.body.confirmar_pass;
        

        //Verificação se as senhas são iguais
        if(senha !== confirmarSenha){
            return res.send(`
                <script>
                alert('As senhas não são iguais !!');
                window.location.href = '/cadastro';
                </script>`);
        } 
        
        const senhaHash = await bcrypt.hash(senha,10);
         //cadasatro do usuario no banco
         await Usuario.create({
            email: email,
            senha: senhaHash
        });
    
        //rediresona para pagina de login
        res.redirect('/login');

        } catch(erro) {
            console.error('Erro ao cadastrar !',erro);
            res.status(500).send('Erro ao cadastrar usuário');
        }
    });

app.post('/login',async (req,res)=> {
    try{
        const email = req.body.email;
        const senha = req.body.senha;

        //procurando usuario pelo email
        const usuario = await Usuario.findOne({
            where: {email: email}
        });

        //verificando se o usuario existe

        if(!usuario){
            return res.status(401).send('Email ou senha incorretos!');
        }

        //comparando a senha com o hash salvo

        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if(!senhaCorreta){
            return res.status(401).send('Email ou senha incorretos');
        }

        //cria a sessao de usuario
        req.session.usuarioId = usuario.id;

        //redireciona para a home

        res.redirect('/home');

    } catch (erro) {
        console.log('Erro no login: '+erro);
        res.status(500).send('Erro interno ao realizar login');
    }
});

app.listen(3000, ()=>{
    console.log('Servidor rodando!');
});