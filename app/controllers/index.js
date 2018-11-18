const path = require('path');
const CarsDAO = require(path.resolve('app', 'models', 'CarsDAO'));

module.exports = (req, res, next) => {
  CarsDAO.findAll()
    .then(cars => {
        res.render('index', {
          cars: cars,
          hasCars: cars.length > 0
        });
    })
    .catch(e => console.log(e));
};
