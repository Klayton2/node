//coneção com banco de dados mysql

const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemadecadastro', 'root', '2702', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};