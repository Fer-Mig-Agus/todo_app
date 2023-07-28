const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DEBUG, DB_USER, DB_PASSWORD, DB_DIALECT, DB_PORT, DB_HOST, DB_NAME } = process.env;

const baseDeDatos = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    port: DB_PORT,
    dialect: DB_DIALECT,
    host: DB_HOST,
    logging: false
})

module.exports = baseDeDatos;