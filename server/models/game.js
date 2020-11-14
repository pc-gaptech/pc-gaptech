"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      // define association here
    }
  }
  Game.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Game name is Required",
          },
          notNull: {
            msg: "Game name is Required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Game Description is Required",
          },
          notNull: {
            msg: "Game Description is Required",
          },
        },
      },
      picture_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Game Picture URL is Required",
          },
          notNull: {
            msg: "Game Picture URL is Required",
          },
          isUrl: {
            msg: "Game Picture URL is Invalid",
          },
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Rating is Required",
          },
          min: {
            args: 1,
            msg: "Rating is Invalid",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
