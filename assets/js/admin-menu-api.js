//GET
const getAllMenuItemsButton = document.getElementById('btn-menu-get');
getAllMenuItemsButton.addEventListener('click', () => {
  const result = fetch('http://localhost:3000/items', {
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
          'ID:' + data[i].id + ' Name: ' + data[i].name + ' Price: ' + data[i].price + '<br>';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});


//POST
const addMenuItemButton = document.getElementById('btn-menu-add');
addMenuItemButton.addEventListener('click', () => {
  const postID = document.getElementById('menu-form-id').value;
  const postName = document.getElementById('menu-form-name').value;
  const postPrice = document.getElementById('menu-form-price').value;

  const postData = {
    id: postID,
    name: postName,
    price: postPrice,
  };

  fetch('http://localhost:3000/items', {
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
});

//PUT
const updateMenuItemButton = document.getElementById('btn-menu-upd');
updateMenuItemButton.addEventListener('click', () => {
  const putID = document.getElementById('menu-form-id').value;
  const putName = document.getElementById('menu-form-name').value;
  const putPrice = document.getElementById('menu-form-price').value;

  const data = {
    id: putID,
    name: putName,
    price: putPrice,
  };
  console.log(data);

  fetch(`http://localhost:3000/items/${data.id}`, {
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
});

// DELETE
const deleteMenuItemButton = document.getElementById('btn-menu-del');
deleteMenuItemButton.addEventListener('click', () => {
  const deleteID = document.getElementById('menu-form-id').value;
  console.log(deleteID);
  fetch(`http://localhost:3000/items/${deleteID}`, {
    method: 'DELETE',
  })
    .then((res) => {
      console.log('Request complete! response:', res);
    })
    .catch((error) => {
      console.log(error);
    });
});