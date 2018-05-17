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
    let address = fs.readFileSync('addresses.csv','utf-8')
    address = address.split('\n')
    address.splice(address.length-1,1)

    for(let i = 0; i < address.length; i++){
      address[i] = address[i].split(',')
      address[i] = {
        street:address[i][1],
        city:address[i][2],
        zip_code:address[i][3],
        createdAt:new Date(),
        updatedAt:new Date()
      }
    }

    return queryInterface.bulkInsert('Addresses',address, {});
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
