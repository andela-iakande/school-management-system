'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userName: {
    allowNull: false,
    type: Sequelize.STRING,
    },
    firstName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      },
    groupId: {
      allowNull: false,
      type:Sequelize.INTEGER,
      DefaultValue: 2,
    },
    levelId: {
      type:Sequelize.INTEGER,
       OnDelete: 'CASCADE',
        references: {
          model: 'Level',
          key: 'id'
        },
        OnUpdate: 'cascade',
    },
    address: {
    allowNull: false,
    type:Sequelize.STRING,
    }, 
    gender:{
    defaultValue: 'None',
    type:Sequelize.STRING,
    options: ['Male', 'Female']
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('User');
  }
};