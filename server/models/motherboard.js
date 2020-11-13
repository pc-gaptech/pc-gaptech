'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motherboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Motherboard.init({
    name: DataTypes.STRING,
    socket: DataTypes.ENUM([ 'AM4', 'LGA1151' ]),
    chipset: DataTypes.ENUM([ 'A350', 'B450', 'X370', 'B450', 'X470', 'B550', 'X570', 'B360', 'H370', 'Z370', 'Z390' ]),
    form_factor: DataTypes.ENUM([ 'ATX', 'Micro-ATX', 'Mini-ITX' ]),
    manufacturer: DataTypes.STRING,
    power_draw: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Motherboard',
  });
  return Motherboard;
};