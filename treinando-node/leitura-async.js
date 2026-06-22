const fs = require('fs');

const leituraAsync = (arquivo)=>{
    console.log('Fazendo leitura de forma assíscrona');
    console.time('Bloqueio assícrono');

    fs.readFile(arquivo,()=>{});
    console.timeEnd('Bloqueio assícrono');
};

module.exports = leituraAsync;