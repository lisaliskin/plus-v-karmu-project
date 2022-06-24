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
    subcategory_id,
    user_id,
  } = req.body;
  if (name && description && subcategory_id) {
    try {
      console.log('-------------START-----------------', user_id);
      const newTask = await Task.create({
        name,
        description,
        subcategory_id,
        creator_id: user_id,
        status: false,
      });
      // console.log('=-=-=-=-=-=-=-=-=-\n', newTask.dataValues.id, user_id);
      console.log('=-=-=-=-=-=-=-=-=-\n', newTask);

      const newUsersTask = await UsersTask.create({
        user_id,
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
  const allTasks1 = await Task.findAll({
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
  // const { allTasks } = allTasks1;
  // console.log('000000000000000000000000000000000000000000000000000000000000000', allTasks1);
  if (allTasks1) {
    return res.json(allTasks1);
  }
  return res.json([]);
};

const sub = async (req, res) => {
  // console.log('on back get info for subs', req.body);
  const {
    el,
    userSignIn,
  } = req.body;
  // console.log('---------', el, userSignIn);
  if (el.id && userSignIn.id) {
    try {
      console.log('-------------START-----------------');
      const newUserTask = await UsersTask.create({
        user_id: userSignIn.id,
        task_id: el.id,
      });
      console.log('=-=-=-=-=create new UserTask=-\n', newUserTask);
      const updatesTask = await Task.update({
        podpisan_id: userSignIn.id,
      }, {
        where: {
          id: el.id,
        },
      });
      return res.json(userSignIn);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }
  // return res.sendStatus(500);
};

module.exports = {
  create,
  getAllTasks,
  sub,
};
