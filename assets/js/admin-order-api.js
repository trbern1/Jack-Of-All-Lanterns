//GET
const getAllOrdersButton = document.getElementById('btn-ord-get-all');
getAllOrdersButton.addEventListener('click', () => {
  const result = fetch('http://localhost:3000/orders', {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    },}
);
  result
    .then((res) => {
      console.log('Request complete! response:', res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const infoUI = document.getElementById('get-content-area');
      infoUI.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        infoUI.innerHTML +=
          'OID:' + data[i].order_id + ' IID: ' + data[i].item_id + ' Quantity: ' + data[i].quant + '<br>';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

//GET
const getOneOrderButton = document.getElementById('btn-ord-get-one');
getOneOrderButton.addEventListener('click', () => {
  const fetchID = document.getElementById('order-form-oid').value;
  console.log(fetchID);
  const result = fetch(`http://localhost:3000/orders/${fetchID}`, {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    },}
);
  result
    .then((res) => {
      console.log('Request complete! response:', res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const infoUI = document.getElementById('get-content-area');
      infoUI.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        infoUI.innerHTML +=
          'OID:' + data[i].order_id + ' IID: ' + data[i].item_id + ' Quantity: ' + data[i].quant + '<br>';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});