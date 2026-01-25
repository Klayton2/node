const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');

fs.readFile('nomes.txt',(err,data)=>{
    console.log(data.toString());
})
