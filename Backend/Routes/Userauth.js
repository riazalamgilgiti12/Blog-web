const express  = require('express');
const Registration = require('../controller/UserController');


const Router = express.Router();

Router.post('/registration', Registration);


module.exports = Router;