const {
  Task,
  UsersTask,
  Subcategory,
  Category,
  User,
} = require('../db/models');

const create = async (req, res) => {
  console.log(req.body);
  const {
    name,
    description,
    img,
    subcategory_id,
    id,
  } = req.body;
  if (name && description && img && subcategory_id) {
    try {
      console.log('-------------START-----------------');
      const newTask = await Task.create({
        name,
        description,
        img,
        subcategory_id,
      });
      console.log('----------------------------------\n', newTask.dataValues.id, id);
      const newUsersTask = await UsersTask.create({
        user_id: id,
        task_id: newTask.dataValues.id,
      });
      return res.json({
        newTask,
        newUsersTask,
      });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
};

const getAllTasks = async (req, res) => {
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
    return res.json({
      allTasks,
    });
  }
  return res.json([]);
};

module.exports = {
  create,
  getAllTasks,
};
