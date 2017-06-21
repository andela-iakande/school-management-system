'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Status', {
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
      statusText: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
     userId: {
      type: Sequelize.INTEGER,
       OnDelete: 'CASCADE',
        references: {
          model: 'User',
          key: 'id'
        },
        OnUpdate: 'cascade',
      unique: true,
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Status');
  }
};