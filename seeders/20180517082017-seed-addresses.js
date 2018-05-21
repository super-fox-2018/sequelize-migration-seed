'use strict';

const fs = require('fs');
const addressesString = fs.readFileSync(__dirname + '/../addresses.csv', 'utf8');

const addresses = addressesString.split('\n').reduce((acc, string) => {
  if (string !== '') {
    const address = string.split(',').slice(1);
    acc.push({
      street: address[0],
      city: address[1],
      zip_code: address[2],
      createdAt: new Date(),
      updatedAt: new Date
    });
  }
  return acc;
}, []);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', addresses, {});
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
