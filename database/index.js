const { Pool } = require('pg');

const pool = new Pool({
  user: 'Wendy',
  host: 'localhost',
  database: 'reservations',
  password: '',
});

function queryMethod(query, callback) {
  pool.query(query, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
}

module.exports = {
  queryMethod,
};