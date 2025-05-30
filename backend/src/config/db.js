require("dotenv").config();

const { neon } = require("@neondatabase/serverless");

const database_url = process.env.DATABASE_URL;

const sql = neon(database_url);

module.exports = sql;
