"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("CPUs", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			socket: {
				type: Sequelize.STRING,
			},
			chipset: {
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
			TDP: {
				type: Sequelize.INTEGER,
			},
			manufacturer: {
				type: Sequelize.STRING,
			},
			power_draw: {
				type: Sequelize.INTEGER,
			},
			core_count: {
				type: Sequelize.INTEGER,
			},
			isIGPU: {
				type: Sequelize.BOOLEAN,
			},
			max_rating: {
				type: Sequelize.INTEGER,
			},
			price: {
				type: Sequelize.INTEGER,
			},
			picture_url: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("CPUs");
	},
};
