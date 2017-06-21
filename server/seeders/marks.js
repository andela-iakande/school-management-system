module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Marks', [
      {
        
        subjectId: '101',
        markOne: '76',
        markTwo:'76',
        midMark: '59',
        finalMark: '75',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       
        subjectId: '302',
        markOne: '76',
        markTwo:'56',
        midMark: '86',
        finalMark: '64',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        subjectId: '401',
        markOne: '57',
        markTwo:'86',
        midMark: '48',
        finalMark: '76',
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        subjectId: '301',
        markOne: '64',
        markTwo:'67',
        midMark: '84',
        finalMark: '86',
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        subjectId: '402',
        markOne: '91',
        markTwo:'56',
        midMark: '73',
        finalMark: '83',
        userId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface =>
    queryInterface.bulkDelete('Marks', null, {})
};
