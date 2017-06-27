

module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    statusText: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
    {
      freezeTableName: true
    });

  Status.associate = (models) => {
  // associations can be defined here
    Status.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Status;
};
