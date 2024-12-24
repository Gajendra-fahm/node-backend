const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Gajendra',
  port: 5432, 
});


pool.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

module.exports = pool



