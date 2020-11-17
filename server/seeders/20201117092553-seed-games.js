"use strict";

const fs = require("fs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		try {
			const games = JSON.parse(fs.readFileSync("./seeders/data/games.json", "utf8"));
			games.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("Games", games, {});
		} catch (err) {
			console.log(err);
		}
	},

	down: async (queryInterface, Sequelize) => {
		try {
			await queryInterface.bulkDelete("Games", null, {});
		} catch (err) {
			console.log(err);
		}
	},
};
