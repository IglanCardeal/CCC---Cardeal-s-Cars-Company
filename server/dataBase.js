const Sequelize = require('sequelize');

const dbConnection = new Sequelize('db_cars', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = dbConnection;
