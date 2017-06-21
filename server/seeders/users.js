const bcrypt = require('bcrypt-nodejs');
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('User', [
      {
        userName: 'imizezek',
        firstName: 'Imisioluwa',
        lastName: 'Akande',
        email: 'imisioluwa.akande@andela.com',
        groupId: 2,
        levelId: 2,
        gender: 'Male',
        password: bcrypt.hashSync('imisioluwa.akande@andela.com', bcrypt.genSaltSync(8)),
        address: '2, ikeja lagos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'kings',
        firstName: 'Kingdom',
        lastName: 'Isaac',
        email: 'kingdomisaac@yahoo.com',
        groupId: 2,
        levelId: 2,
        gender: 'Male',
        password: bcrypt.hashSync('kingdomisaac@yahoo.com', bcrypt.genSaltSync(8)),
        address: '5, Berger lagos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'skibo',
        firstName: 'Solomon',
        lastName: 'Kingsley',
        email: 'solomon@yahoo.com',
        groupId: 3,
        levelId: 3,
        gender:'Male',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8)),
        address: '12, Akinremi street, lagos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Ann',
        firstName: 'Anu',
        lastName: 'Onifade',
        email: 'anu@yahoo.com',
        groupId: 4,
        levelId: 4,
        gender: 'Female',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8)),
        address: '22, Adebimpe street, lagos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'pfunky',
        firstName: 'Yinka',
        lastName: 'Alabi',
        email: 'pfunky@yahoo.com',
        groupId: 4,
        levelId: 4,
        password: bcrypt.hashSync('kingdomisaac@yahoo.com', bcrypt.genSaltSync(8)),
        address: '14, Olaniyan street, lagos',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface =>
    queryInterface.bulkDelete('User', null, {})
};
