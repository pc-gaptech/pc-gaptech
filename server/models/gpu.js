"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class GPU extends Model {
		static associate(models) {
			GPU.hasMany(models.RecommendedConfig, {
				sourceKey: "id",
				foreignKey: "GPUId",
			});
			GPU.hasMany(models.SavedConfig, {
				sourceKey: "id",
				foreignKey: "GPUId",
			});
		}
	}
	GPU.init(
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: "Name should not empty",
					},
				},
			},
			power_draw: {
				type: DataTypes.NUMBER,
				validate: {
					min: {
						args: 1,
						msg: "Min Power Draw 1",
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
			gpu_chipset: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: "GPU Chipset should not empty",
					},
				},
			},
			price: {
				type: DataTypes.NUMBER,
				validate: {
					min: {
						args: 10000,
						msg: "Min Price 10000",
					},
				},
			},
			rating: {
				type: DataTypes.NUMBER,
				validate: {
					min: {
						args: 1,
						msg: "Min Rating 1",
					},
					max: {
						args: 10,
						msg: "Max Rating 10",
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
			modelName: "GPU",
		},
	);
	return GPU;
};
