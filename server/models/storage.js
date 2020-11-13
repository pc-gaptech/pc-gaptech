'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Storage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Storage.init({
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    storage_type: DataTypes.ENUM([ 'ATX', 'Micro-ATX', 'Mini-ITX' ]),
    power_draw: DataTypes.INTEGER,
    manufacturer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Storage',
  });
  return Storage;
};