const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'it353',
  host: 'localhost',
  database: 'it353database',
  password: 'root',
  port: 5432,
});

const getMenuItems = (request, response) => {
    pool.query('SELECT * FROM it353project.menu_items', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };
  

module.exports = {
    getMenuItems,
}