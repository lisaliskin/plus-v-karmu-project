const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      TaskExample, BlackList, CountUser, Message, UserMessanger, UsersTask
    }) {
      this.hasMany(TaskExample, { foreignKey: 'user_id' });
      this.hasMany(BlackList, { foreignKey: 'user_id' });
      this.hasMany(CountUser, { foreignKey: 'user_id' });
      this.hasMany(Message, { foreignKey: 'user_id' });
      this.hasMany(UserMessanger, { foreignKey: 'user_id' });
      this.hasMany(UsersTask, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
