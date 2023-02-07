const express = require('express');
const homeRoutes = require('./home.route');

const routes = express.Router();

routes.use(homeRoutes);

module.exports = routes;