"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class RAM extends Model {
		static associate(models) {
			RAM.hasMany(models.RecommendedConfig, {
				sourceKey: "id",
				foreignKey: "RAMId",
			});
			RAM.hasMany(models.SavedConfig, {
				sourceKey: "id",
				foreignKey: "RAMId",
			});
		}
	}
	RAM.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "RAM name is Required",
					},
					notNull: {
						msg: "RAM name is Required",
					},
				},
			},
			memory_type: DataTypes.ENUM(["DDR3", "DDR4"]),
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
			]),
			manufacturer: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "RAM Manufacturer name is Required",
					},
					notNull: {
						msg: "RAM Manufacturer name is Required",
					},
				},
			},
			power_draw: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "RAM Power Rating is Required",
					},
					min: {
						args: 1,
						msg: "RAM Power Rating is Invalid",
					},
				},
			},
			memory_speed: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "RAM Memory Speed is Required",
					},
					min: {
						args: 1,
						msg: "RAM Memory Speed is Invalid",
					},
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "RAM Price is Required",
					},
					min: {
						args: 10000,
						msg: "RAM Price is Invalid",
					},
				},
			},
			picture_url: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "RAM Picture URL is Required",
					},
					notNull: {
						msg: "RAM Picture URL is Required",
					},
					isUrl: {
						msg: "RAM Picture URL is Invalid",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "RAM",
		},
	);
	return RAM;
};
