'use strict';
module.exports = (sequelize, DataTypes) => {
  var Adress = sequelize.define('Adress', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {});
  Adress.associate = function(models) {
    // associations can be defined here
  };
  return Adress;
};