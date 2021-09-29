const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

//rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.treatPost);

//rotas de contato
route.get('/contact', contactController.homePage);

module.exports = route;