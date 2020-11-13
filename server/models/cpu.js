"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CPU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CPU.init(
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
      chipset: {
        type: DataTypes.ENUM([
          "A350",
          "B450",
          "X370",
          "B450",
          "X470",
          "B550",
          "X570",
          "B360",
          "H370",
          "Z370",
          "Z390",
        ]),
      },
      TDP: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Name should not null",
          },
          min: {
            args: 1,
            msg: "TDP min 1",
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
      core_count: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 1,
            msg: "Min Core Count 1",
          },
        },
      },
      isIGPU: {
        type: DataTypes.BOOLEAN,
      },
      max_rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 1,
            msg: "Min Rating 1",
          },
          max: {
            args: 10,
            msg: "Max Power Draw 10",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
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
            msg: "Picture URL should not empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "CPU",
    }
  );
  return CPU;
};
