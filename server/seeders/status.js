module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Status', [
      {
      statusText:'Excellent', 
      userId: '15',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      statusText:'Good', 
      userId: '17', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      statusText:'Pass', 
      userId: '25',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      statusText:'Poor', 
      userId: '34',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      statusText:'Good', 
      userId: '21',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {}),
  down: queryInterface =>
    queryInterface.bulkDelete('Status', null, {})
};