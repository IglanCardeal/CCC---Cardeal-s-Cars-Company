const path = require('path');
const express = require('express');
const app = express();
const dbConnection = require(path.resolve('server', 'dataBase'));
const PORT = 3000;

// midlewares
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const routes = require(path.resolve('app', 'routes', 'index'));
// **********

// setters
app.set('view engine', 'ejs');
app.set('views', path.resolve('app', 'views'));
// **********

app.use(express.static(path.resolve('app', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(routes);

dbConnection.sync({ force: false })
  .then(_ => {
    app.listen(PORT, console.log(`Server ON - PORT ${PORT} `));
  })
  .catch(e => console.log(e));
