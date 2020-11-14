"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Casing extends Model {
		static associate(models) {
			Casing.hasMany(models.RecommendedConfig, {
				sourceKey: "id",
				foreignKey: "CasingId",
			});
			Casing.hasMany(models.SavedConfig, {
				sourceKey: "id",
				foreignKey: "CasingId",
			});
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
				allowNull: false,
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
		},
	);
	return Casing;
};
