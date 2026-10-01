const Sequelize = require('sequelize');
const { FORCE } = require('sequelize/lib/index-hints');

const sequelize = new Sequelize('test','root','2702', {
    host: 'localhost',
    dialect: 'mysql'
});
//Model de Postagem 

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: 'qualquer',
    conteudo: 'fasdfjifjaofjkaosfasofkasof'
});

//Model de usuarios

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Klayton',
    sobrenome: 'sousa',
    idade: 24,
    email: 'nsdnajdnasjdn'
});

sequelize.authenticate().then(()=>{
    console.log('Conectado com sucesso !');
    return Usuario.sync();
}).then(()=>{ console.log('tabela criada com sucesso');
})
.catch((erro)=>{
    console.log('Falha ao se conectar: '+console.erro);
});


