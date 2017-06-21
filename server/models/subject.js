'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
     subjectCode: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    levelId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Subject.belongsTo(models.Level, {
            foreignKey: 'levelId',
            onDelete: 'CASCADE',
          });
      }
    }
  });
  return Subject;
};