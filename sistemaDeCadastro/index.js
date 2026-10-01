const express = require('express');

const app = express();

const handlebars = require('express-handlebars');

//coneção bd

const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemaDeCadastro', 'root', '2702', {
    host: 'localhost',
    dialect: 'mysql'
});


//config
    //template engine
app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(3000, ()=>{
    console.log('Servidor rodando!');
})