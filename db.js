/** Database config for database. */

// db.js
const { Client } = require("pg");
require("dotenv").config();

const DB_URI = process.env.NODE_ENV === "test"
  ? process.env.DATABASE_URL || "postgresql:///bookstore"
  : process.env.DATABASE_URL || "postgresql:///bookstore";

const db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;
