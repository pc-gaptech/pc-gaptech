"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CPU extends Model {
		static associate(models) {
			CPU.hasMany(models.RecommendedConfig, {
				sourceKey: "id",
				foreignKey: "CPUId",
			});
			CPU.hasMany(models.SavedConfig, {
				sourceKey: "id",
				foreignKey: "CPUId",
			});
		}
	}
	CPU.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Name should not empty",
					},
				},
			},
			socket: {
				type: DataTypes.ENUM(["AM4", "LGA1151", "LGA1200"]),
			},
			chipset: {
				type: DataTypes.ENUM([
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
			},
			TDP: {
				type: DataTypes.INTEGER,
				allowNull: false,
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
					}
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
		},
	);
	return CPU;
};
