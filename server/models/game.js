"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Game extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Game.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Game Title is Required",
					},
					notNull: {
						msg: "Game Title is Required",
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
		},
	);
	return Game;
};
