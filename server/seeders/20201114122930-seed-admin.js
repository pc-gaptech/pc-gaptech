"use strict";

const { encryptPassword } = require("../helpers/bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					username: "Admin_1",
					firstname: "Admin First Name",
					lastname: "Admin Last Name",
					email: "admin@admin.com",
					password: encryptPassword("adminpassword"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
