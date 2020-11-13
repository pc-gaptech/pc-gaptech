'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PowerSupply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PowerSupply.init({
    name: DataTypes.STRING,
    efficiency: DataTypes.STRING,
    max_power: DataTypes.INTEGER,
    manufacturer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PowerSupply',
  });
  return PowerSupply;
};