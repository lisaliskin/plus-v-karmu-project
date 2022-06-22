const router = require('express').Router();
const taskController = require('../controllers/task.controller');

const taskRouter = router;

taskRouter.post('/task', taskController.create);

module.exports = taskRouter;
