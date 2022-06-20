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
    static associate({ Message }) {
      this.hasMany(Message, { foreignKey: 'messanger_id' });
    }
  }
  Messanger.init({
    // user_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Messanger',
  });
  return Messanger;
};
