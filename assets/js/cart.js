$(document).ready(function() {

    function setQuantity() {
        // retrieve quantity from cart
        var quantity = 1;
        // set quantity in session storage
        sessionStorage.setItem('quantity', quantity)
    }

    function createOrder() {
        const createOrderUrl = '/orders'
        // test data
        var order = {
            order_id: sessionStorage.getItem('orderID'),
            item_id: sessionStorage.getItem('itemID'),
            quant: sessionStorage.getItem('quantity')
        }
        $.post(createOrderUrl, order, function(data, status) {
            alert("Post")
        }).fail(function() {
            alert('error in post request')
        })
    }

    // on button click retrieve all data from session storage, clear it, send order to database
    $("#makeOrder").click(function(e) {
        e.preventDefault();
        alert('order placed');
        const orderIDPromise = createOrderID();
        orderIDPromise.then((json) => console.log('promise ended: ', json))
    })

    const MAX = 100000
    async function createOrderID() {
        var key = Math.floor(Math.random() * MAX);
        var present = await checkOrderID(key);
        while(present) { key = Math.floor(Math.random() * MAX); present = await checkOrderID(key)}
        return key;
    }
    
    async function checkOrderID(key) {
        try {
            console.log(key)
            const response = await fetch(`http://127.0.0.1:3000/order/${key}`);
            if(!response.ok) {
                alert('key is not in database')
            }
            const json = await response.json();
            console.log(json)
            console.log(key);
        } catch (error) {
            console.log('key is free')
        }
    }

})