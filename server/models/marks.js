'use strict';
module.exports = function(sequelize, DataTypes) {
  var Marks = sequelize.define('Marks', {
    subjectId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
    markOne: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
    markTwo: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
    midMark: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
    finalMark: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Marks.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
          });
      }
    }
  });
  return Marks;
};