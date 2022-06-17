const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAchievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Achievement, User }) {
      this.belongsTo(Achievement, { foreignKey: 'achievement_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  UserAchievement.init({
    user_id: DataTypes.INTEGER,
    achievement_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserAchievement',
  });
  return UserAchievement;
};
