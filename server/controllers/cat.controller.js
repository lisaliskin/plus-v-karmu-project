const {
  Category,
} = require('../db/models');

const getAllCategories = async (req, res) => {
  const allCategories = await Category.findAll();
  if (allCategories) {
    return res.json(
      allCategories,
    );
  }
  return res.json([]);
};

module.exports = {
  getAllCategories,
};
