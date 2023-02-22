const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  'postgres',
  'Midhun@2000',
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: process.env.DB_LOGGING === 'true',
  }
);

module.exports = sequelize;
