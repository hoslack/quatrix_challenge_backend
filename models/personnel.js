'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personnel = sequelize.define('Personnel', {
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    personnel_first_name: DataTypes.STRING,
    personnel_other_name: DataTypes.STRING
  }, {});
  Personnel.associate = function(models) {
    // associations can be defined here
  };
  return Personnel;
};