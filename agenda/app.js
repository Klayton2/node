const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const consign = require('consign');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const config = require('./config')
const error = require('./middlewares/error');

mongoose.connect('mongodb://localhost:27017/agenda');

const app = express();
const server = http.Server(app);
const io = socketIo(server);
const store = new expressSession.MemoryStore();

//carregamento dos middlewares
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(expressSession({
  store,
  name: config.sessionKey,
  secret: config.sessionSecret
}));
app.use(cookieParser('agenda'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

//Leitura dos cookies
io.use((socket, next) => {
  const cookieData = socket.request.headers.cookie;
  const cookieObj = cookieParser(cookieData);
  const sessionHash = cookieObj[config.sessionKey] || '';
  const sessionId = sessionHash.split('.')[0].slice(2);
  store.all((err, sessions) => {
    const currentSession = sessions[sessionId];
    if(err || !currentSession) {
      return next(new Error('Acesso Negado!'));
    }
    socket.handshake.session = currentSession;
    return next();
  });
});

//carregamento das rotas
consign({})
.include('models')
.then('controllers')
.then('routes')
.then('events')
.into(app,io);

//tratamento de erros
app.use(error.notFound);
app.use(error.serverError);

app.listen(3000,()=>{
  console.log('Servidor rodando');
});