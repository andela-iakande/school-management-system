'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Subject', {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subjectCode: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    levelId: {
      type: Sequelize.INTEGER,
       OnDelete: 'CASCADE',
        references: {
          model: 'Level',
          key: 'id'
        },
        OnUpdate: 'cascade',
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
    return queryInterface.dropTable('Subject');
  }
};