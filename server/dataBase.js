const Sequelize = require('sequelize');

module.exports = new Sequelize('db_cars', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
