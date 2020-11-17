"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Motherboard extends Model {
		static associate(models) {
			Motherboard.hasMany(models.RecommendedConfig, {
				sourceKey: "id",
				foreignKey: "MotherboardId",
			});
			Motherboard.hasMany(models.SavedConfig, {
				sourceKey: "id",
				foreignKey: "MotherboardId",
			});
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
			socket: DataTypes.ENUM(["AM4", "LGA1151", "LGA1200", "TR4X"]),
			chipset: DataTypes.ENUM([
				"A350",
				"B350",
				"B450",
				"B550",
				"X370",
				"X470",
				"X570",
				"B365",
				"H370",
				"Z370",
				"Z390",
				"Z490",
				"H470",
				"B460",
				"H410",
				"X399",
				"H270",
				"Z270",
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
						args: 1,
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
