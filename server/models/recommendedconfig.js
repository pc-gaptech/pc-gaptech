"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class RecommendedConfig extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	RecommendedConfig.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Config Name is Required",
					},
					notNull: {
						msg: "Config Name is Required",
					},
				},
			},
			rating: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration Rating is Required",
					},
					min: {
						args: 1,
						msg: "Configuration Rating is Invalid",
					},
				},
			},
			CPUId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration CPU ID is Required",
					},
					min: {
						args: 1,
						msg: "Configuration CPU ID is Invalid",
					},
				},
			},
			CPUCoolerId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration CPU Cooler ID is Required",
					},
					min: {
						args: 1,
						msg: "Configuration CPU Cooler ID is Invalid",
					},
				},
			},
			MotherboardId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration Motherboard ID is Required",
					},
					min: {
						args: 1,
						msg: "Configuration Motherboard ID is Invalid",
					},
				},
			},
			GPUId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration GPU ID is Required",
					},
					min: {
						args: 1,
						msg: "Configuration GPU ID is Invalid",
					},
				},
			},
			RAMId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration RAM ID is Required",
					},
					min: {
						args: 1,
						msg: "Configuration RAM ID is Invalid",
					},
				},
			},
			StorageId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration Storage ID is Required",
					},
					min: {
						args: 1,
						msg: "Configuration Storage ID is Invalid",
					},
				},
			},
			PowerSupplyId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration Power Supply ID is Required",
					},
					min: {
						args: 1,
						msg: "Configuration Power Supply ID is Invalid",
					},
				},
			},
			CasingId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Configuration Casing ID is Required",
					},
					min: {
						args: 1,
						msg: "Configuration Casing ID is Invalid",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "RecommendedConfig",
		},
	);
	return RecommendedConfig;
};
