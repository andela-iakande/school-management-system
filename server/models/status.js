'use strict';
module.exports = function(sequelize, DataTypes) {
  var Status = sequelize.define('Status', {
     statusText: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
     userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Status.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
          });
      }
    }
  });
  return Status;
};