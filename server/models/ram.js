'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RAM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RAM.init({
    name: DataTypes.STRING,
    memory_type: DataTypes.ENUM([ 'DDR3', 'DDR4' ]),
    chipset: DataTypes.ENUM([ 'A350', 'B450', 'X370', 'B450', 'X470', 'B550', 'X570', 'B360', 'H370', 'Z370', 'Z390' ]),
    manufacturer: DataTypes.STRING,
    power_draw: DataTypes.NUMBER,
    memory_speed: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RAM',
  });
  return RAM;
};