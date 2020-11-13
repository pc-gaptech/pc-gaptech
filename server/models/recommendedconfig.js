"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecommendedConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecommendedConfig.init(
    {
      name: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      CPUId: DataTypes.INTEGER,
      CPUCoolerId: DataTypes.INTEGER,
      MotherboardId: DataTypes.INTEGER,
      GPUId: DataTypes.INTEGER,
      RAMId: DataTypes.INTEGER,
      StorageId: DataTypes.INTEGER,
      PowerSupplyId: DataTypes.INTEGER,
      CasingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RecommendedConfig",
    }
  );
  return RecommendedConfig;
};
