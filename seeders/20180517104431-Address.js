'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /* 
1,711-2880 Nulla St, Mississippi, 96522
2,8562 Fusce Rd, Nebraska, 20620
3,606-3727 Ullamcorper Street, Roseville, 11523
4,867-859 Sit Rd, New York, 39531
5,7292 Dictum Av, San Antonio, 47096
6,651-8679 Sodales Av, Tamuning, 10855
7,191-103 Integer Rd, Corona New Mexico, 08219
8,2508 Dolor. Av, Muskegon KY, 12482
9,666-4366 Lacinia Avenue, Ohio, 19253
10,Lacinia Road, San Bernardino, 09289
    */
      return queryInterface.bulkInsert('Addresses', [{
        id: 1,
        street: '711-2880 Nulla St',
        city: 'Mississippi',
        zipCode: '96522',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        street: '8562 Fusce Rd',
        city: 'Nebraska',
        zipCode: '20620',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        street: '606-3727 Ullamcorper Street',
        city: 'Roseville',
        zipCode: '11523',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        street: '867-859 Sit Rd',
        city: 'New York',
        zipCode: '39531',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        street: '7292 Dictum Av',
        city: 'San Antonio',
        zipCode: '47096',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        street: '651-8679 Sodales Av',
        city: 'Tamuning',
        zipCode: '10855',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 7,
        street: '191-103 Integer Rd',
        city: 'Corona New Mexico',
        zipCode: '08219',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 8,
        street: '2508 Dolor. Av',
        city: 'Muskegon KY',
        zipCode: '12482',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 9,
        street: '666-4366 Lacinia Avenue',
        city: 'Ohio',
        zipCode: '19253',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 10,
        street: 'Lacinia Road',
        city: 'San Bernardino',
        zipCode: '09289',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
