const express = require('express');
const { peopleController } = require('../controllers');
const { formValidation } = require('../middlewares/formValidation.middleware');

const route = express.Router();
route.get('/', peopleController.findAll);
route.get('/:id', peopleController.findById);
route.post('/', formValidation, formValidation, peopleController.insertPerson);
route.delete('/:id', peopleController.deletePerson);
route.put('/:id', formValidation, peopleController.updatePerson);
// route.get('/', () => console.log('aaaaaaaaaaaaaaa'));

module.exports = route;