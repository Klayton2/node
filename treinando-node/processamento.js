const https = require('https');
const fs = require('fs');
const leituraSync = require('./leitura-sync');
const leituraAsync = require('./leitura-async');

const arquivo = './node-v24.14.1.tar.gz';
const stream = fs.createWriteStream(arquivo);
const download = 'https://nodejs.org/dist/latest/node-v24.14.1.tar.gz';

https.get(download,(res)=>{
    console.log('fazendo download do nodejs');
    res.on('data',(data)=> stream.write(data));
    res.on('end',()=>{
        stream.end();
        console.log('Download concluido');
        leituraAsync(arquivo);
        leituraSync(arquivo);
    });
});
