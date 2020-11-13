"use strict";
const { Model } = require("sequelize");
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
  }
  Casing.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name should not empty",
          },
        },
      },
      form_factor: {
        type: DataTypes.ENUM(["ATX", "Micro-ATX", "Mini-ITX"]),
      },
      manufacturer: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Manufacturer should not empty",
          },
        },
      },

      price: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Price should not null",
          },
          min: {
            args: 10000,
            msg: "Price min 10000",
          },
        },
      },

      picture_url: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Picture_URL should not empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Casing",
    }
  );
  return Casing;
};
