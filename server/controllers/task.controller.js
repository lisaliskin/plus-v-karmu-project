const { Task } = require('../db/models');

const create = async (req, res) => {
  const {
    name, description, img, subcategory_id, user_id,
  } = req.body;
  if (name && description && img && subcategory_id && user_id) {
    try {
      const newTask = await Task.create({
        name,
        description,
        img,
        subcategory_id,
        user_id: req.session.user.id,
      });
      res.json({ newTask });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(401);
};

module.exports = {
  create,
};
