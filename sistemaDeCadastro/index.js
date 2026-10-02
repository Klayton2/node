const express = require('express');

const app = express();

const {engine} = require('express-handlebars');

//coneção com banco de dados mysql

const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemaDeCadastro', 'root', '2702', {
    host: 'localhost',
    dialect: 'mysql'
});

//config
    //template engine
app.engine('handlebars',engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//rotas

app.get('/login',(req,res)=>{
    res.render('layouts/login');
});

app.listen(3000, ()=>{
    console.log('Servidor rodando!');
});