const express = require('express');
const path = require('path');


const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}));

var tarefasList = ['Acordar','Arrumar o quarto','Escovar os dentes'];

app.post('/adicionar',(req,res) => {
    const tarefa = req.body.tarefa;

    tarefasList.push(tarefa);
    res.redirect('/');
});


app.get('/',(req, res) => {
    res.render('index',{tarefasList:tarefasList})
});

app.get('/deletar/:id',(req,res) =>{
    tarefasList = tarefasList.filter(function(val,index){
        if(index != req.params.id){
            return val
        }
    })
    res.render('index',{tarefasList:tarefasList})
});


app.listen(3000, () =>{
    console.log('Server rodando!');
});