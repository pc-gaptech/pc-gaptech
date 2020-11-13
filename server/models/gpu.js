'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GPU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GPU.init({
    name: DataTypes.STRING,
    power_draw: DataTypes.NUMBER,
    manufacturer: DataTypes.STRING,
    gpu_chipset: DataTypes.STRING,
    price: DataTypes.NUMBER,
    rating: DataTypes.NUMBER,
    picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GPU',
  });
  return GPU;
};