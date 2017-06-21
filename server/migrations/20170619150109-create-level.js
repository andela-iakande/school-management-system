'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Level', {
      id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      unique: true,
    },
     subjectCode: {
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
    return queryInterface.dropTable('Level');
  }
};