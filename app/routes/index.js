const home = app => app.get('/', (req, res) => {
  app.app.controllers.index.index(app, req, res);
})

module.exports = home;
