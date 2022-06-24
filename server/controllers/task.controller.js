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

const deleteSub = async (req, res) => {
  // console.log('on back get info for subs', req.body);
  const {
    el,
    userSignIn,
  } = req.body;
  // console.log('---------', el, userSignIn);
  if (el.id && userSignIn.id) {
    try {
      console.log('-------------START-----------------');
      const newUserTask = await UsersTask.destroy({
        where: {
          user_id: userSignIn.id,
          task_id: el.id,
        },
      });
      console.log('=-=-=-=-=create new UserTask=-\n', newUserTask);
      const updatesTask = await Task.update({
        podpisan_id: null,
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

const deleteTask = async (req, res) => {
  // console.log('on back get info for subs', req.body);
  const {
    el,
    userSignIn,
  } = req.body;
  console.log(req.body);
  // console.log('---------', el, userSignIn);
  if (el.id && userSignIn.id) {
    try {
      console.log('-------------START-----------------');
      const delUserTask = await UsersTask.destroy({
        where: {
          task_id: el.id,
          user_id: userSignIn.id,
        },
      });
      const delTask = await Task.destroy({
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
};

const updateStatus = async (req, res) => {
  const {
    el,
    userSignIn,
  } = req.body;
  if (el.id && userSignIn.id) {
    try {
      const currTask = await Task.findOne({
        where: {
          id: el.id,
        },
      });
      const currUser = await User.findOne({
        where: {
          id: userSignIn.id,
        },
      });

      const updateStatusTask = await Task.update({
        status: !currTask.status,
      }, {
        where: {
          id: el.id,
        },
      });
      // currTask = await Task.findOne({ where: { id: el.id } });
      // // currUser = await User.findOne({ where: { id: userSignIn.id } });
      // console.log(currTask.status);
      // if (!currTask.status) {
      const updateCarmaUser = await User.update({
        points: currUser.points + 5,
      }, {
        where: {
          id: userSignIn.id,
        },
      });
      // } else {
      //   const updateCarmaUser = await User.update({
      //     points: currUser.points + 5,
      //   }, {
      //     where: {
      //       id: userSignIn.id,
      //     },
      //   });
      // }
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
  deleteSub,
  deleteTask,
  updateStatus,
};
