'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};