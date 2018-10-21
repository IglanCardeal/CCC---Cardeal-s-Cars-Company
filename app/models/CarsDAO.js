// esta é a classe que realiza a manipulação no banco de listar, inserir e mover um registro.

function CarsDAO(connection){
  this.connection = connection;
  //listar
  this.listar = (callback) => this.connection.query('SELECT * FROM tb_cars', callback);
  //inserir;
  this.inserir = (car, callback) => this.connection.query('INSERT INTO tb_cars SET ?',car , callback);
  //remover;
  this.remover = (car, callback) => this.connection.query('DELETE FROM tb_cars WHERE carID = ' + car.carID, callback);
}

module.exports = _ => CarsDAO;
