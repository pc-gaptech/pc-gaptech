"use strict";
const { Model } = require("sequelize");
const { encryptPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Username is Required",
					},
					notNull: {
						msg: "Username is Required",
					},
				},
			},
			firstname: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "First Name is Required",
					},
					notNull: {
						msg: "First Name is Required",
					},
				},
			},
			lastname: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Last Name is Required",
					},
					notNull: {
						msg: "Last Name is Required",
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Email is Required",
					},
					notNull: {
						msg: "Email is Required",
					},
					isEmail: {
						masg: "Email is Invalid",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Password is Required",
					},
					notNull: {
						msg: "Password is Required",
					},
				},
			},
			is_admin: {
				type: DataTypes.BOOLEAN,
			},
		},
		{
			hooks: {
				beforeCreate(user) {
					user.password = encryptPassword(user.password);
				},
			},
			sequelize,
			modelName: "User",
		},
	);
	return User;
};
