const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const consign = require('consign');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const error = require('./middlewares/error');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

//carregamento dos middlewares
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(cookieParser('agenda'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

//carregamento das rotas
consign({})
.include('models')
.then('controllers')
.then('routes')
.into(app);

//carregamento do socket.io
io.on('connection',(client) =>{
  client.on('send-server',(data) =>{
    const resposta = `<b>${data.nome}:</b> ${data.msg}<br>`;
    client.emit('send-client',resposta);
    client.broadcast.emit('send-client', resposta);
  });
});

//tratamento de erros
app.use(error.notFound);
app.use(error.serverError);

app.listen(3000,()=>{
  console.log('Servidor rodando');
});