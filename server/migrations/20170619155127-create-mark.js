'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Marks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    markOne: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    markTwo: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    midMark: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    finalMark: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    subjectId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('Marks');
  }
};