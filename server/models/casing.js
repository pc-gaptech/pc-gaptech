'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Casing.init({
    name: DataTypes.STRING,
    form_factor: DataTypes.ENUM([ 'ATX', 'Micro-ATX', 'Mini-ITX' ]),
    manufacturer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Casing',
  });
  return Casing;
};