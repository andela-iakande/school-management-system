

module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    subjectCode: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
  }, {
    classMethods: {
      associate(models) {
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
