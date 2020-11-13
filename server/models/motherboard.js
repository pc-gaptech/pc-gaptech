"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Motherboard extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Motherboard.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Motherboard name is Required",
					},
					notNull: {
						msg: "Motherboard name is Required",
					},
				},
			},
			socket: DataTypes.ENUM(["AM4", "LGA1151"]),
			chipset: DataTypes.ENUM([
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
			form_factor: DataTypes.ENUM(["ATX", "Micro-ATX", "Mini-ITX"]),
			manufacturer: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Motherboard Manufacturer name is Required",
					},
					notNull: {
						msg: "Motherboard Manufacturer name is Required",
					},
				},
			},
			power_draw: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Motherboard Power Draw is Required",
					},
					min: {
						args: 10000,
						msg: "Motherboard Power Draw is Invalid",
					},
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Motherboard Price is Required",
					},
					min: {
						args: 10000,
						msg: "Motherboard Price is Invalid",
					},
				},
			},
			picture_url: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Motherboard Picture URL is Required",
					},
					notNull: {
						msg: "Motherboard Picture URL is Required",
					},
					isUrl: {
						msg: "Motherboard Picture URL is Invalid",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Motherboard",
		},
	);
	return Motherboard;
};
