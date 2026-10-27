const db = require('./db');

const Usuario = db.sequelize.define('usuarios', {
    email: {
        type: db.Sequelize.TEXT
    },
    senha: {
        type: db.Sequelize.STRING
    }
});
module.exports = Usuario;