// $(document).ready(function() {
    
//     const fakeKeys = [0,1,2,3,4];
//     const MAX = 10
//     function createOrderID() {
//         var key = Math.floor(Math.random() * MAX);
//         while(!checkOrderID(key)) { key = Math.floor(Math.random() * MAX); }
//         return key;
//     }
    
//     function checkOrderID(key) {
//         var check = false;
//         if(Number.isInteger(key)) {
//             // compare the key to the already made set of keys
//             $.get(`/order/${key}`, function(data, status) {
//                 console.error('key is already in the database');
//                 check = false;
//             }).fail(function() {
//                 // continue with process because key is unique
//                 console.error("Error while getting menu items")
//                 check = true;
//             })
            
//             return check;

//         }
//         return check;
//     }
    
    
//     // set orderID for customer on page load
//     sessionStorage.setItem('orderID', createOrderID())
// })