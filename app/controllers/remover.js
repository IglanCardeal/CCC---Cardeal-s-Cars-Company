const path = require('path');
const CarsDAO = require(path.resolve('app', 'models', 'CarsDAO'));

module.exports = (req, res, next) => {
  CarsDAO.destroy({ where: {
    carId: req.body.carId
  } })
    .then(_ => {
      res.redirect('/');
    })
    .catch(e => console.log(e));
}
