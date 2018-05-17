
// const model = require('./models');
// const { Contact, Address } = model;


const fs = require('fs');
const addressesString = fs.readFileSync('./addresses.csv', 'utf8');

const addresses = addressesString.split('\n').reduce((acc, string) => {
  if (string !== '') {
    const address = string.split(',').slice(1);
    acc.push({
      street: address[0],
      city: address[1],
      zip_code: address[2]
    });
  }
  return acc;
}, []);

console.log(addresses);