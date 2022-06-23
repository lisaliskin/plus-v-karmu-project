const { Router } = require('express');
const {
  Task, Category, Subcategory, User,
} = require('../db/models');

const tasksRouter = Router();

tasksRouter.post('/', async (req, res) => {
  const allTasks = await Task.findAll({
    include: [{
      model: Subcategory,
      include: [{
        model: Category,
      }],
    }, {
      model: User,
    }],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  // const allTasks = await Task.findAll();
  // console.log('==========', JSON.parse(JSON.stringify(allTasks)));
  if (allTasks) {
    return res.json((allTasks));
  }
  return res.sendStatus(401);
});

module.exports = tasksRouter;
