'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
   userName: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate:{ isEmail:true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    groupId: {
      allowNull: false,
      type:DataTypes.INTEGER,
      DefaultValue: 2,
    },
    levelId: {
      allowNull: true,
      type:DataTypes.INTEGER,
    },
      address: {
      allowNull: false,
      type: DataTypes.STRING,
    }, 
    gender:{
       allowNull: false,
      type:DataTypes.ENUM,
      values:['male', 'female']
    }
  }, {
    classMethods: {
        associate: (models) => {
        // associations can be defined here
          User.belongsTo(models.Level, {
            foreignKey: 'levelId',
            onDelete: 'CASCADE',
          });
        },
      },
    });
  return User;
};