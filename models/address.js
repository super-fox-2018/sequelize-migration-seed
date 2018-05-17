'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    id: DataTypes.INTEGER,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};