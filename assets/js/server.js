const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3000;

const db = require('./queries');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/**
 * Gets all info from the database - example
 */
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/items', db.getMenuItems);
app.get('/items/:id', db.getMenuItem);
app.post('/items', db.createMenuItem);
app.put('/items/:id', db.updateMenuItem);
app.delete('/items/:id', db.deleteMenuItem);

app.get('/orders', db.getOrders);
app.get('/orders/:oid/:iid', db.getOrder);
app.post('/orderids', db.getOrderIDs);
app.post('/orders', db.createOrder);
app.put('/orders/:oid/:iid', db.updateOrderItem);
app.delete('/orders/:oid', db.deleteEntireOrder);
app.delete('/orders/:oid/:iid', db.deleteOrderItem);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});