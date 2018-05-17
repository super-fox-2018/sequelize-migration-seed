'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.TEXT
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};