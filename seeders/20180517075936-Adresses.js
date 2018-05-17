'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Adresses', [{
        street: '711-2880 Nulla St',
        city: 'Mississippi',
        zipcode: 96522,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: '8562 Fusce Rd',
        city: 'Nebraska',
        zipcode: 20620,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: '606-3727 Ullamcorper Street',
        city: 'Roseville',
        zipcode: 11523,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: '867-859 Sit Rd',
        city: 'New York',
        zipcode: 39531,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: '7292 Dictum Av',
        city: 'San Antonio',
        zipcode: 47096,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: '651-8679 Sodales Av',
        city: 'Tamuning',
        zipcode: 10855,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: '191-103 Integer Rd',
        city: 'Corona New Mexico',
        zipcode: 08219,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: '2508 Dolor. Av',
        city: 'Muskegon KY',
        zipcode: 12482,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: '666-4366 Lacinia Avenue',
        city: 'Ohio',
        zipcode: 19253,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        street: 'Lacinia Road',
        city: 'San Bernardino',
        zipcode: 09289,
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      return queryInterface.bulkDelete('Adresses', null, {});
  }
};
