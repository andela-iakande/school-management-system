'use strict';
module.exports = function(sequelize, DataTypes) {
  var Level = sequelize.define('Level', {
    subjectCode: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Level.hasMany(models.Subject, {
            foreignKey: 'subjectCode',
            onDelete: 'CASCADE',
          });
      }
    }
  });
  return Level;
};