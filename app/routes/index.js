const path = require('path');
const express = require('express');
const Router = express.Router();

// controllers
const cadastrar = require(path.resolve('app', 'controllers', 'cadastrar'));
const index = require(path.resolve('app', 'controllers', 'index'));
const remover = require(path.resolve('app', 'controllers', 'remover'));
// ***********

Router.get('/', index);
Router.post('/cadastrar', cadastrar);
Router.post('/remover', remover);

module.exports = Router;
