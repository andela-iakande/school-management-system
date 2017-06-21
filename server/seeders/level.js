module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Level', [
      {
      subjectCode:'101', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      subjectCode:'201', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      subjectCode:'301', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      subjectCode:'401', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      subjectCode:'501', 
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {}),
  down: queryInterface =>
    queryInterface.bulkDelete('Level', null, {})
};
