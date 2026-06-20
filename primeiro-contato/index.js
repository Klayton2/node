const http = require('http');

const atendeRequisicao = (req , res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Olá mundo!</h1>');
    res.end();
}

const server = http.createServer(atendeRequisicao);

const serverLigou = () =>{
    console.log("servidor rodando");
}

server.listen(3000, serverLigou);