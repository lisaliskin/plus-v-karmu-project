const router = require('express').Router();
const taskController = require('../controllers/task.controller');
const checkAuth = require('../middlewares/checkAuth');

const taskRouter = router;

taskRouter.post('/task', checkAuth, taskController.create);
taskRouter.post('/subTask', checkAuth, taskController.sub);

taskRouter.get('/task', taskController.getAllTasks);

module.exports = taskRouter;
