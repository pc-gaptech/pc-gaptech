"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SavedConfigs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
      },
      CPUId: {
        type: Sequelize.INTEGER,
      },
      CPUCoolerId: {
        type: Sequelize.INTEGER,
      },
      MotherboardId: {
        type: Sequelize.INTEGER,
      },
      GPUId: {
        type: Sequelize.INTEGER,
      },
      RAMId: {
        type: Sequelize.INTEGER,
      },
      StorageId: {
        type: Sequelize.INTEGER,
      },
      PowerSupplyId: {
        type: Sequelize.INTEGER,
      },
      CasingId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("SavedConfigs");
  },
};
