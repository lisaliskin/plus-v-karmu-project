const { Router } = require('express');
const {
  Task, Category, Subcategory, User,
} = require('../db/models');

const tasksRouter = Router();

tasksRouter.get('/', async (req, res) => {
  const allTasks = await Task.findAll({
    include: [{
      model: Subcategory,
      include: [{
        model: Category,
      }],
    }, {
      model: User,
    }],
    raw: true,
  });
  if (allTasks) {
    return res.json({ allTasks });
  }
  return res.json([]);
});

module.exports = tasksRouter;
