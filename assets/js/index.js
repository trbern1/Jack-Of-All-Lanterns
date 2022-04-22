$(document).ready(function() {
    const fakeKeys = [0,1,2,3,4];
    const MAX = 10
    async function createOrderID() {
        var key = Math.floor(Math.random() * MAX);
        if(await checkOrderID(key) == false) { key = Math.floor(Math.random() * MAX); }
        return key;
    }
    
    function checkOrderID(key) {
        if(Number.isInteger(key)) {
            // compare the key to the already made set of keys
            var check = false;
            $.get(`/order/${key}`, function(data, status) {}).always(function(response) {
                if(response.status == 404) {
                    console.log(typeof(response.status))
                    check = true;
                    console.log(check);
                }
            })
            console.log(check)
        }
        return check;
    }
    // set orderID for customer on page load
    sessionStorage.setItem('orderID', createOrderID())
})