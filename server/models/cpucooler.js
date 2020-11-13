'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CPUCooler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CPUCooler.init({
    name: DataTypes.STRING,
    socket: DataTypes.ENUM([ 'AM4', 'LGA1151' ]),
    TDP: DataTypes.INTEGER,
    manufacturer: DataTypes.STRING,
    power_draw: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CPUCooler',
  });
  return CPUCooler;
};