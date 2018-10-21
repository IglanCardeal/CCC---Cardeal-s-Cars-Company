const controller = {
  remover: (app, req, res) => {
    let connection = app.server.dataBase();
    let carDAO = new app.app.models.CarsDAO(connection);
    let car = req.body;
    console.log(car);

    carDAO.remover(car, (error, result) => {
      if(error)
        throw error;
      connection = null;
      carDAO = null;
      res.redirect('/');
    });
  }
};

module.exports = controller;
