const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  UsersTask.init({
    user_id: DataTypes.INTEGER,
    task_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UsersTask',
  });
  return UsersTask;
};
