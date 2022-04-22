$(document).ready(function() {
    
    const fakeKeys = [0,1,2,3,4];
    const MAX = 10
    function createOrderID() {
        var key = Math.floor(Math.random() * MAX);
        while(!checkOrderID(key)) { key = Math.floor(Math.random() * MAX); }
        return key;
    }
    
    function checkOrderID(key) {
        var check = true;
        // compare the key to the already made set of keys
        $.get('/orderids', function(data, status) {
            console.log(status)
            console.log(data)
            // this needs to change to getting orderids from the table set
            for(const fake of fakeKeys) {
                if(key == fake) {
                    check = false;
                    break;
                } 
            }
        }).fail(function() {
            console.error("Error while getting menu items")
        })
        
        return check;
    }
    
    
    // set orderID for customer on page load
    sessionStorage.setItem('orderID', createOrderID())
})