const getButton = document.getElementById('btn-menu-get');
getButton.addEventListener('click', () => {
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
          'Name: ' + data[i].name + ' \t\tPrice: ' + data[i].price + '<br>';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

