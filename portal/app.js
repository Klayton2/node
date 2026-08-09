const http = require('http');
const path = require('path');
const express = require('express');
const bodyPaser = require('body-parser');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');


app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname,'public')));


app.listen(5000, () =>{
    console.log('Server rodando !');
});