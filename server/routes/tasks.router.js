const router = require('express').Router();
const taskController = require('../controllers/task.controller');
const checkAuth = require('../middlewares/checkAuth');

const taskRouter = router;

taskRouter.post('/task', checkAuth, taskController.create);
taskRouter.post('/subTask', checkAuth, taskController.sub);
taskRouter.post('/delSubTask', checkAuth, taskController.deleteSub);
taskRouter.post('/delTask', checkAuth, taskController.deleteTask);
taskRouter.post('/updateStatusTask', checkAuth, taskController.updateStatus);

taskRouter.get('/task', taskController.getAllTasks);

module.exports = taskRouter;
