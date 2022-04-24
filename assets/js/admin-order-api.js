//GET ALL
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

//GET ONE
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
    clearMenuForm();
});

//POST
const addOrderItemButton = document.getElementById('btn-ord-add');
addOrderItemButton.addEventListener('click', () => {
  const postOID = document.getElementById('order-form-oid').value;
  const postIID = document.getElementById('order-form-iid').value;
  const postQuant = document.getElementById('order-form-quant').value;

  const postData = {
    order_id: postOID,
    item_id: postIID,
    quant: postQuant,
  };

  fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
    .then((res) => {
      console.log('Request complete! response:', res);
    })
    .catch((error) => {
      console.log(error);
    });
    clearMenuForm();
    showMessage("Order Item was added successfully!")
});


//PUT
const updateOrderItemButton = document.getElementById('btn-ord-upd');
updateOrderItemButton.addEventListener('click', () => {
  const putOID = document.getElementById('order-form-oid').value;
  const putIID = document.getElementById('order-form-iid').value;
  const putQuant = document.getElementById('order-form-quant').value;

  const data = {
    order_id: putOID,
    item_id: putIID,
    quant: putQuant,
  };
  console.log(data);

  fetch(`http://localhost:3000/orders/${data.order_id}/${data.item_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log('Request complete! response:', res);
    })
    .catch((error) => {
      console.log(error);
    });
    clearMenuForm();
    showMessage("Item was updated successfully!")
});


// DELETE ONE
const deleteOrderItemButton = document.getElementById('btn-ord-del-one');
deleteOrderItemButton.addEventListener('click', () => {
  const deleteOID = document.getElementById('order-form-oid').value;
  const deleteIID = document.getElementById('order-form-iid').value;
  fetch(`http://localhost:3000/orders/${deleteOID}/${deleteIID}`, {
    method: 'DELETE',
  })
    .then((res) => {
      console.log('Request complete! response:', res);
    })
    .catch((error) => {
      console.log(error);
    });
    clearMenuForm();
    showMessage("Item was deleted successfully!")
});

// DELETE ALL
const deleteEntireOrderButton = document.getElementById('btn-ord-del-all');
deleteEntireOrderButton.addEventListener('click', () => {
  const deleteOID = document.getElementById('order-form-oid').value;
  fetch(`http://localhost:3000/orders/${deleteOID}`, {
    method: 'DELETE',
  })
    .then((res) => {
      console.log('Request complete! response:', res);
    })
    .catch((error) => {
      console.log(error);
    });
    clearMenuForm();
    showMessage("Item was deleted successfully!")
});