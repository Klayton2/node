const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;


/* Criando novos arquivos
fs.writeFile('criando.html','<html><h1>Criando um arquivo usando o node</h1></html>',(err)=>{
        if(err) throw err;
        console.log('O arquivo foi criado com sucesso !');
    })

*/

// Criando novos arquivos usando o appendFile
fs.appendFile('criando.html','<html><h1>Criando um arquivo usando o node</h1></html>',(err)=>{
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso !');
})
const server = http.createServer((req,res)=>{
    fs.readFile('criando.html',(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    })
})

server.listen(port,hostname,()=>{
    console.log('Servidor está rodando!');
})
