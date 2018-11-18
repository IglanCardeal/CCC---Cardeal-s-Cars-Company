const path = require('path');
const CarsDAO = require(path.resolve('app', 'models', 'CarsDAO'));

module.exports = (req, res, next) => {
    CarsDAO.create({
      carId: req.body.carId,
      maker: req.body.maker,
      model: req.body.model,
      engine: req.body.engine,
      year: req.body.year,
      imgUrl: req.body.imgUrl
    })
      .then(_ => {
        res.redirect('/');
      })
      .catch(e => console.log(e));
}
