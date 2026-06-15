const readline = require('readline');

function somar(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Digite um número: ',(n1)=>{
        rl.question('Digite um número: ',(n2)=>{

            const num1 = Number(n1);
            const num2 = Number(n2);

            console.log('Resultado : ',num1+num2);

            rl.close();
        });
    });

    rl.on('close',()=>{
        console.log('Adeus');
    });
}

exports.somar = somar;