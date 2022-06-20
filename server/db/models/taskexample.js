const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaskExample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Subcategory, User }) {
      this.belongsTo(Subcategory, { foreignKey: 'subcategory_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  TaskExample.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT,
    subcategory_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TaskExample',
  });
  return TaskExample;
};
