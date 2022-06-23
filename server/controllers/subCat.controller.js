const {
  Category, Subcategory,
} = require('../db/models');

const getAllSubCategory = async (req, res) => {
  const allSubcategories = await Subcategory.findAll({
    include: [{
      model: Category,
    }],
  });
  if (allSubcategories) {
    return res.json(JSON.parse(JSON.stringify(allSubcategories)));
  }
  return res.sendStatus(401);
};

module.exports = {
  getAllSubCategory,
};
