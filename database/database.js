const Sequelize = require("sequelize");

const connection = new Sequelize('crudblog','root','Si27913010!!',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection