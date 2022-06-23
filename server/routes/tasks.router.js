const router = require('express').Router();
const taskController = require('../controllers/task.controller');
const checkAuth = require('../middlewares/checkAuth');

const taskRouter = router;

taskRouter.post('/task', checkAuth, taskController.create);
// taskRouter.get('/task', taskController.getAllTasks);

module.exports = taskRouter;
