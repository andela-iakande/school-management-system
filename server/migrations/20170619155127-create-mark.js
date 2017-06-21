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
      type: Sequelize.INTEGER,
       OnDelete: 'CASCADE',
        references: {
          model: 'Subject',
          key: 'id'
        },
        OnUpdate: 'cascade',
    },
    userId: {
      type: Sequelize.INTEGER,
      unique: true,
       OnDelete: 'CASCADE',
        references: {
          model: 'User',
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
    return queryInterface.dropTable('Marks');
  }
};