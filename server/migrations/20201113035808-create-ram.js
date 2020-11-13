"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RAMs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      memory_type: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      chipset: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      manufacturer: {
        type: Sequelize.STRING,
      },
      power_draw: {
        type: Sequelize.INTEGER,
      },
      memory_speed: {
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
    await queryInterface.dropTable("RAMs");
  },
};
