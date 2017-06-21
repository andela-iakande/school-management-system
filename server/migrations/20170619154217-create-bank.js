'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Bank', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     questionTitle: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
    },
    questionContent: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
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
    return queryInterface.dropTable('Bank');
  }
};