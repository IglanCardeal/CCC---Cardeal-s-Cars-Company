const controller = {
  cadastrar: (app, req, res) => {
    let connection = app.server.dataBase();
    let carDAO = new app.app.models.CarsDAO(connection);
    let car = req.body;

    carDAO.inserir(car, (error, result) => {
      if(error)
        throw error;
      connection = null;
      carDAO = null;
      res.redirect('/');
    });

  }
}

module.exports = controller;
