'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Motherboards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      socket: {
        type: Sequelize.ARRAY({type: Sequelize.STRING})
      },
      chipset: {
        type: Sequelize.ARRAY({type: Sequelize.STRING})
      },
      form_factor: {
        type: Sequelize.ARRAY({type: Sequelize.STRING})
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      power_draw: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      picture_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Motherboards');
  }
};