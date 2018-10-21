const cadastrar = app => app.post('/cadastrar', (req, res) => {
  app.app.controllers.cadastrar.cadastrar(app, req, res);
})


module.exports = cadastrar;
