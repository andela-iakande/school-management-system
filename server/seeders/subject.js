module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Subject', [
      {
        subjectCode: '105',
        levelId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectCode: '102',
        levelId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectCode: '308',
        levelId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectCode: '409',
        levelId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectCode: '505',
        levelId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface =>
    queryInterface.bulkDelete('Subject', null, {})
};
