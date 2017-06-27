

module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    questionTitle: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    questionContent: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    levelId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        Bank.belongsTo(models.Level, {
          foreignKey: 'levelId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Bank;
};
