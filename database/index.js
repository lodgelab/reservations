const { Pool } = require('pg');
const config = require('./index.config.js');

const pool = new Pool(config);

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
  pool,
};