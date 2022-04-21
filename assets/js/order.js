$(document).ready(function() {

    const fakeKeys = [0,1,2,3,4];
    const MAX = 10
    function createKey() {
        var key = Math.floor(Math.random() * MAX);
        while(!checkKey(key)) { key = Math.floor(Math.random() * MAX); }
        return key;
    }
    
    function checkKey(key) {
        var check = true;
        // compare the key to the already made set of keys
        for(const fake of fakeKeys) {
            if(key == fake) {
                check = false;
                break;
            } 
        }
        return check;
    }

    console.log(createKey());
});