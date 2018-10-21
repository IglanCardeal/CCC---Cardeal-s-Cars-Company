const remover = app => app.post('/remover', (req, res) => app.app.controllers.remover.remover(app, req, res))

module.exports = remover;
