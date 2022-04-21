$(document).ready(function() {

    function getMenuItems() {
        const menuItemUrl = ''
        $.get(menuItemUrl, function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        }).fail(function() {
            console.error("Error while getting menu items")
        })
    }
    
    function createOrder() {
        const createOrderUrl = ''
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

})