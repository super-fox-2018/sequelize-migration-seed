'use strict';
const fs = require('fs')
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
    let contacts = fs.readFileSync('contacts.csv','utf-8');
    contacts = contacts.split('\n')
    contacts.splice(contacts.length-1,1)

    for(let i = 0; i < contacts.length; i++){
      contacts[i] = contacts[i].split(',')
      contacts[i] = {
        name:contacts[i][1],
        email:contacts[i][2],
        phone:contacts[i][3],
        createdAt:new Date(),
        updatedAt:new Date()
      }
    }
    return queryInterface.bulkInsert('Contacts',contacts, {});
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
