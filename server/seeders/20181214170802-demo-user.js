'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
      username: 'John Doe',
      email: 'test@gmail.com',
      password:'test',
      status:'active',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      username: 'John Doe 2',
      email: 'test@gmail.com',
      password:'test',
      status:'active',
      createdAt: new Date(),
      updatedAt: new Date() 
    }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
