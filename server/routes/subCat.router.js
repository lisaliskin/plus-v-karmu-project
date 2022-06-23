const { Router } = require('express');
const subCatController = require('../controllers/subCat.controller');

const subCatRouter = Router();

subCatRouter.get('/', subCatController.getAllSubCategory);

module.exports = subCatRouter;
