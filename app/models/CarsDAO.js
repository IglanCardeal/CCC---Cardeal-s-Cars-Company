const path = require('path');
const Sequelize = require('sequelize');
const dbConnection = require(path.resolve('server', 'dataBase'));

module.exports = dbConnection.define('tb_cars', {
  carId: {
  type: Sequelize.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
  unique: true
},
  maker: {
  type: Sequelize.STRING,
  allowNull: false
},
  model: {
  type: Sequelize.STRING,
  allowNull: false
},
  engine: {
  type: Sequelize.FLOAT,
  allowNull: false
},
  year: {
  type: Sequelize.INTEGER,
  allowNull: false
},
  imgUrl: {
  type: Sequelize.STRING,
  allowNull: true
}
});
