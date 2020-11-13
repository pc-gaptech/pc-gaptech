"use strict";
const { Model } = require("sequelize");
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
  }
  CPUCooler.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name should not empty",
          },
        },
      },
      socket: {
        type: DataTypes.ENUM(["AM4", "LGA1151"]),
      },
      TDP: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 1,
            msg: "Min TDP 1",
          },
        },
      },
      manufacturer: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Manufacturer should not empty",
          },
        },
      },
      power_draw: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 1,
            msg: "Min Power Draw 1",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 10000,
            msg: "Min Price 10000",
          },
        },
      },
      picture_url: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Picture URL should not empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "CPUCooler",
    }
  );
  return CPUCooler;
};
