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
    static associate({ Message, User, Task }) {
      this.hasMany(Message, { foreignKey: 'messanger_id' });
      this.belongsToMany(User, {through:'UserMessanger', foreignKey:'messanger_id'});
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
