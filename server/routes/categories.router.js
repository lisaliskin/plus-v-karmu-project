const { Router } = require('express');
const catController = require('../controllers/cat.controller');

const catRouter = Router();

catRouter.get('/', catController.getAllCategories);

module.exports = catRouter;
