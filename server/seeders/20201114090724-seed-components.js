"use strict";

const fs = require("fs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		try {
			const cpu = JSON.parse(fs.readFileSync("./seeders/data/cpu.json", "utf8"));
			cpu.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("CPUs", cpu, {});

			const casing = JSON.parse(fs.readFileSync("./seeders/data/casing.json", "utf8"));
			casing.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("Casings", casing, {});

			const cpuCooler = JSON.parse(fs.readFileSync("./seeders/data/cpuCooler.json", "utf8"));
			cpuCooler.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("CPUCoolers", cpuCooler, {});

			const gpu = JSON.parse(fs.readFileSync("./seeders/data/gpu.json", "utf8"));
			gpu.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("GPUs", gpu, {});

			const motherboard = JSON.parse(fs.readFileSync("./seeders/data/motherboard.json", "utf8"));
			motherboard.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("Motherboards", motherboard, {});

			const powerSupply = JSON.parse(fs.readFileSync("./seeders/data/powerSupply.json", "utf8"));
			powerSupply.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("PowerSupplies", powerSupply, {});

			const ram = JSON.parse(fs.readFileSync("./seeders/data/ram.json", "utf8"));
			ram.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("RAMs", ram, {});

			const storage = JSON.parse(fs.readFileSync("./seeders/data/storage.json", "utf8"));
			storage.forEach((element) => {
				element.createdAt = new Date();
				element.updatedAt = new Date();
			});
			await queryInterface.bulkInsert("Storages", storage, {});
		} catch (err) {
			console.log(err);
		}
	},

	down: async (queryInterface, Sequelize) => {
		try {
			await queryInterface.bulkDelete("CPUs", null, {});
			await queryInterface.bulkDelete("GPUs", null, {});
			await queryInterface.bulkDelete("Casings", null, {});
			await queryInterface.bulkDelete("CPUCoolers", null, {});
			await queryInterface.bulkDelete("Motherboards", null, {});
			await queryInterface.bulkDelete("PowerSupplies", null, {});
			await queryInterface.bulkDelete("RAMs", null, {});
			await queryInterface.bulkDelete("Storages", null, {});
		} catch (err) {
			console.log(err);
		}
	},
};
