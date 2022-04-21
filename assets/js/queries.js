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


  const getOrders = (request, response) => {
    pool.query('SELECT * FROM it353project.orders', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };

  const getOrder = (request, response) => {
    const oid = parseInt(request.params.oid);
    const iid = parseInt(request.params.iid);
    pool.query(
      'SELECT * FROM it353project.orders WHERE order_id= $1 AND item_id = $2',
      [oid, iid],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  };


  const createOrder = (request, response) => {
    const { order_id, item_id, quant } = request.body;
    console.log(order_id, item_id, quant);
  
    pool.query(
      'INSERT INTO it353project.orders (order_id, item_id, quant) VALUES ($1, $2, $3)',
      [order_id, item_id, quant],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Order added`);
      }
    );
  };


  const updateOrderItem = (request, response) => {
    console.log('hits');
    const oid = parseInt(request.params.oid);
    const iid = parseInt(request.params.iid);
    const { quant } = request.body;
    // console.log(request);

    pool.query(
      'UPDATE it353project.orders SET quant = $1 WHERE order_id = $2 AND item_id = $3',
      [quant, oid, iid],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`Menu item modified with OID = ${oid} and IID = ${iid}`);
      }
    );
  };

  const deleteEntireOrder = (request, response) => {
    const oid = parseInt(request.params.oid);
    console.log(oid);
  
    pool.query('DELETE FROM it353project.orders WHERE order_id= $1', [oid], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Order ID ${oid} Deleted`);
    });
  };

  const deleteOrderItem = (request, response) => {
    const oid = parseInt(request.params.oid);
    const iid = parseInt(request.params.iid);
    console.log(`${oid} ${iid}`);
  
    pool.query('DELETE FROM it353project.orders WHERE order_id = $1 and item_id = $2', [oid, iid], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Order Item Deleted`);
    });
  };

module.exports = {
    getMenuItems,
    getMenuItem,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    getOrders,
    getOrder,
    createOrder,
    updateOrderItem,
    deleteEntireOrder,
    deleteOrderItem
}