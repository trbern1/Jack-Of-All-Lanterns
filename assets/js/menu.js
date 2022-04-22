$(document).ready(function() {
    $(".menu-btn").click(function () {
        sessionStorage.setItem(this.id,1);
        console.log("added " + this.id + " to storage.")
})


    // if(sessionStorage.hasOwnProperty("orderID")) {
    //     alert("orderID already set")
    // }

    // function setItemID() {
    //     // retrieve quantity from cart
    //     var quantity = 0;
    //     // set quantity in session storage
    //     sessionStorage.setItem('itemID', quantity)
    // }

    // function getMenuItems() {
    //     const menuItemUrl = ''
    //     $.get(menuItemUrl, function(data, status) {
    //         alert("Data: " + data + "\nStatus: " + status);
    //     }).fail(function() {
    //         console.error("Error while getting menu items")
    //     })
    //     return data;
    // }
});