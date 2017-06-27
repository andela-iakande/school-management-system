

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Bank', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      questionTitle: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      questionContent: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      levelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Bank');
  }
};
