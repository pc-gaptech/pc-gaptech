'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SavedConfig.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    CPUId: DataTypes.INTEGER,
    CPU_coolerId: DataTypes.INTEGER,
    motherboardId: DataTypes.INTEGER,
    GPUId: DataTypes.INTEGER,
    RAMId: DataTypes.INTEGER,
    storageId: DataTypes.INTEGER,
    power_supplyId: DataTypes.INTEGER,
    casingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SavedConfig',
  });
  return SavedConfig;
};