const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const root = function(pathname){
    if(pathname && pathname !=='/'){
        const arquivo = path.join(__dirname,`${pathname}.html`);
        const existe = fs.existsSync(arquivo);
        if(existe){
        return arquivo;
    }
    return path.join(__dirname,'erro.html');
}
    return path.join(__dirname, 'artigos.html');
};

const server = http.createServer((req, res)=>{
    const pathname = url.parse(req.url).pathname;
    const pg = root(pathname);
    fs.readFile(pg,(err,html)=>{
        res.writeHeader(200, {'Content-Type':'text/html'});
        res.end(html);
    
    });
});

server.listen(3000, ()=>{
    console.log('roteador de paginas rodando');
})