"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class PowerSupply extends Model {
		static associate(models) {
			PowerSupply.hasMany(models.RecommendedConfig, {
				sourceKey: "id",
				foreignKey: "PowerSupplyId",
			});
			PowerSupply.hasMany(models.SavedConfig, {
				sourceKey: "id",
				foreignKey: "PowerSupplyId",
			});
		}
	}
	PowerSupply.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Power Supply name is Required",
					},
					notNull: {
						msg: "Power Supply name is Required",
					},
				},
			},
			efficiency: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Power Supply efficiency rating is Required",
					},
					notNull: {
						msg: "Power Supply efficiency rating is Required",
					},
				},
			},
			max_power: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Power Supply Max Power Rating is Required",
					},
					min: {
						args: 1,
						msg: "Power Supply Max Power Rating is Invalid",
					},
				},
			},
			manufacturer: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Power Supply Manufacturer name is Required",
					},
					notNull: {
						msg: "Power Supply Manufacturer name is Required",
					},
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Power Supply Price is Required",
					},
					min: {
						args: 10000,
						msg: "Power Supply Price is Invalid",
					},
				},
			},
			picture_url: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Power Supply Picture URL is Required",
					},
					notNull: {
						msg: "Power Supply Picture URL is Required",
					},
					isUrl: {
						msg: "Power Supply Picture URL is Invalid",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "PowerSupply",
		},
	);
	return PowerSupply;
};
