/* código para criação do banco para este projeto */
CREATE DATABASE db_cars;
CREATE TABLE tb_cars(
  carID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  maker VARCHAR(32),
  model VARCHAR(64),
  engine FLOAT,
  year VARCHAR(4),
  imgUrl VARCHAR(255)
);

SELECT * FROM tb_cars;
