const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Students = sequelize.define(
  'Students',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Students;
