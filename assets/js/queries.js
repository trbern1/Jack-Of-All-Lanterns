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
  

  const getMenuItem = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(
      'SELECT * FROM it353project.menu_items WHERE id= $1 ',
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  };


  const createMenuItem = (request, response) => {
    const { id, name, price } = request.body;
    console.log(id, name, price);
  
    pool.query(
      'INSERT INTO it353project.menu_items (id, name, price) VALUES ($1, $2, $3)',
      [id, name, price],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Menu item added`);
      }
    );
  };


  const updateMenuItem = (request, response) => {
    console.log('hits');
    const id = parseInt(request.params.id);
    const { name, price } = request.body;

    pool.query(
      'UPDATE it353project.menu_items SET name = $1, price = $2 WHERE id = $3',
      [name, price, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`Menu item modified with ID: ${id}`);
      }
    );
  };


  const deleteMenuItem = (request, response) => {
    const id = parseInt(request.params.id);
    console.log(id);
  
    pool.query('DELETE FROM it353project.menu_items WHERE id= $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Menu Item Deleted`);
    });
  };

module.exports = {
    getMenuItems,
    getMenuItem,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem
}