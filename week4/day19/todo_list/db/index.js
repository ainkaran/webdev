const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  database: 'todo_dev'
});

module.exports = db;
