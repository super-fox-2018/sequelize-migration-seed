'use strict';

const fs = require('fs');
const contactsString = fs.readFileSync(__dirname + '/../contacts.csv', 'utf8');


const contacts = contactsString.split('\n').reduce((acc, string) => {
  if (string !== '') {
    const contact = string.split(',').slice(1);
    acc.push({
      name: contact[0],
      email: contact[1],
      phone: contact[2],
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
  return acc;
}, []);

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

    return queryInterface.bulkInsert('Contacts', contacts, {});
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
