const sql = require("mysql");
const dotenv = require("dotenv").config();
const db = sql.createConnection({
  host: process.env.DATABASE_HOST,
  port: 3306,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;
