module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Bank', [
      {
        questionTitle: 'Tuition fee',
        questionContent: `How do we pay tuition fee?`,
        levelId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionTitle: 'Junior WAEC',
        questionContent: `When do we get Junior WAEC timetable?`,
        levelId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionTitle: 'Science Class',
       questionContent: `Can we know how many science classes the school have?`,
        levelId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionTitle: 'Parent Teacher Association',
        questionContent: `When is the next Parent Teacher association?`,
        levelId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       questionTitle: 'Final year',
        questionContent: `When is WASSCE final year coming up?`,
        levelId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface =>
    queryInterface.bulkDelete('Bank', null, {})
};
