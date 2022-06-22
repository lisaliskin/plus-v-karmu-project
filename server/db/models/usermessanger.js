'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMessanger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  UserMessanger.init({
    user_id: DataTypes.INTEGER,
    messanger_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserMessanger',
  });
  return UserMessanger;
};
