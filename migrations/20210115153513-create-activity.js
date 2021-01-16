'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      todo: {
        type: Sequelize.STRING
      },
      due_to: {
        type: Sequelize.DATE
      },
      todo_status: {
        type: Sequelize.BOOLEAN
      },
      doing: {
        type: Sequelize.STRING
      },
      doing_status: {
        type: Sequelize.BOOLEAN
      },
      done: {
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
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Activities');
  }
};