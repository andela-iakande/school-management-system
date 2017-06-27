/* eslint no-underscore-dangle: 0 */
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
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
      validate: { isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    groupId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      DefaultValue: 2,
    },
    levelId: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gender: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ['male', 'female']
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.encryptPassword();
      },

      beforeUpdate(user) {
        if (user._changed.password) {
          user.encryptPassword();
        }
      }
    }
  });
  User.associate = (models) => {
    // associations can be defined here
    User.belongsTo(models.Level, {
      foreignKey: 'levelId',
      onDelete: 'CASCADE',
    });
  };
   /**
      * Verify provided user password
      *
      * @param {String} password
      * @returns {Boolean} no return
      */
  User.prototype.verifyPassword = function verifyPassword(password) {
    return bcrypt.compareSync(password, this.password);
  };
   /**
      * Encrypt user's password
      *
      * @returns {Undefined} no return
      */
  User.prototype.encryptPassword = function encryptPassword() {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  };
  return User;
}
;
