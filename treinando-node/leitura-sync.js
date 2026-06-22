const fs = require('fs');

const leituraSync = (arquivo)=>{
    console.log('Fazendo leitura de forma sícrona');
    console.time('Bloqueio sícrono');
    fs.readFileSync(arquivo);
    console.timeEnd('Bloqueio sícrono');
};

module.exports = leituraSync;