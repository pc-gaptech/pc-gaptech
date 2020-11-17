"use strict";

const fs = require("fs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		try {
			const recommmendPC = JSON.parse(fs.readFileSync("./seeders/data/recommendedPC.json", "utf8"));
			recommmendPC.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("RecommendedConfigs", recommmendPC, {});
		} catch (err) {
			console.log(err);
		}
	},

	down: async (queryInterface, Sequelize) => {
		try {
			await queryInterface.bulkDelete("RecommendedConfigs", null, {});
		} catch (err) {
			console.log(err);
		}
	},
};
