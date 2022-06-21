const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Messanger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Message, UserMessanger, Task }) {
      this.hasMany(Message, { foreignKey: 'messanger_id' });
      this.hasMany(UserMessanger, { foreignKey: 'messanger_id' });
      this.belongsTo(Task, { foreignKey: 'task_id' });
    }
  }
  Messanger.init({
    // user_id: DataTypes.INTEGER,
    task_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Messanger',
  });
  return Messanger;
};
