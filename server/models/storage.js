"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Storage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Storage.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Storage Name is Required",
					},
					notNull: {
						msg: "Storage Name is Required",
					},
				},
			},
			capacity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Storage Capacity Size is Required",
					},
					min: {
						args: 1,
						msg: "Storage Capacity Size is Invalid",
					},
				},
			},
			storage_type: DataTypes.ENUM(["ATX", "Micro-ATX", "Mini-ITX"]),
			power_draw: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Storage Power Rating is Required",
					},
					min: {
						args: 1,
						msg: "Storage Power Rating is Invalid",
					},
				},
			},
			manufacturer: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Storage Manufacturer Name is Required",
					},
					notNull: {
						msg: "Storage Manufacturer Name is Required",
					},
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Price Price is Required",
					},
					min: {
						args: 10000,
						msg: "Price Price is Invalid",
					},
				},
			},
			picture_url: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Storage Picture URL is Required",
					},
					notNull: {
						msg: "Storage Picture URL is Required",
					},
					isUrl: {
						msg: "Storage Picture URL is Invalid",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Storage",
		},
	);
	return Storage;
};
