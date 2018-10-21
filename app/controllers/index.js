const controller = {
  index: (app, req, res) => {
    let connection = app.server.dataBase();
    let carDAO = new app.app.models.CarsDAO(connection);

    carDAO.listar((error, result) => {
      if(error)
        throw error;
      if(!result)
        result = '';
      res.render('index.ejs', {cars: result});
    });
  }
}

module.exports = controller;
