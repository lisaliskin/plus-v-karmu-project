const router = require('express').Router();
const taskController = require('../controllers/task.controller');

const taskRouter = router;

taskRouter.post('/task', taskController.create);
// taskRouter.get('/task', taskController.getAllTasks);

module.exports = taskRouter;
