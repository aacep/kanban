'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Activity.init({
    todo: DataTypes.STRING,
    due_to: DataTypes.DATE,
    todo_status: DataTypes.BOOLEAN,
    doing: DataTypes.STRING,
    doing_status: DataTypes.BOOLEAN,
    done: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};