const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Subcategory, User, Messanger }) {
      this.belongsTo(Subcategory, { foreignKey: 'subcategory_id' });
      this.belongsToMany(User, { through: 'UsersTask', foreignKey: 'task_id' });
      this.hasMany(Messanger, { foreignKey: 'task_id' });
    }
  }
  Task.init({
    creator_id: DataTypes.INTEGER,
    podpisan_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT,
    subcategory_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
