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
    })
})