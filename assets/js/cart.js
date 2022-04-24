$(document).ready(function() {

    // On refresh click, makes the blocks appear 
    // for each item present in session storage
    checkoutButton = document.getElementById('refresh')
    checkoutButton.addEventListener('click', () => {
        try {
            let itemquants = [sessionStorage.getItem("item1"),
                sessionStorage.getItem("item2"),sessionStorage.getItem("item3"),
                sessionStorage.getItem("item4"),sessionStorage.getItem("item5"),
                sessionStorage.getItem("item6"),sessionStorage.getItem("item7"),
                sessionStorage.getItem("item8")];
            const cart = document.getElementsByClassName('cart');
            // console.log(itemquants);
            for (var i=1; i<itemquants.length+1; i++){
                if (itemquants[i-1] != null){
                    // let itemidname = "item" + i + "-cart";
                    // console.log(itemidname);
                    console.log(i)
                    createCartItem(i)
                    // document.getElementById(itemidname).style.display= "inline";
                }
            }

        }catch (error) {
            console.log(error);
        }
    });

    function createCartItem(i) {
        // add all links of images to items then based on the item value, grab the correct image
        // links must be set up to the Cart.html file not this one.
        const imageOfItems = ['assets/images/', 'assets/images/', 'assets/images/', 'assets/images/']

        var cart = document.getElementsByClassName("cart")
        console.log(cart)

        // create each item row
        var row = document.createElement('div')
        row.classList.add('row')
        row.setAttribute('id', `item${i}-cart`);
        // create elements in each row
        
        // set image values
        var divImage = document.createElement('div');
        divImage.classList.add('col-2')
        var image = document.createElement('img');
        image.src = 'assets/images/PumpkinLogo.png'
        image.alt = 'image of item';
        image.width = "50"
        image.height = "50"
        divImage.append(image)
        row.append(divImage)

        // set name values
        var divName = document.createElement('div');
        divName.classList.add('col-5')
        var name = document.createElement('h4')
        name.innerHTML = "Name of Item"
        divName.append(name)
        row.append(divName)

        // set quantity values 
        var divQuantity = document.createElement('div');
        divQuantity.classList.add('col-3')
        var btnGroup = document.createElement('div');
        btnGroup.classList.add('btn-group')
        btnGroup.classList.add('btn-group-sm')
        btnGroup.setAttribute('role', 'group')
        
        var decrementBtn = document.createElement('button')
        decrementBtn.setAttribute('type', 'button');
        decrementBtn.classList.add('btn')
        decrementBtn.classList.add('btn-outline-secondary')
        decrementBtn.classList.add('decremental')
        decrementBtn.textContent = '-'
        btnGroup.append(decrementBtn)

        var quantity = document.createElement('button')
        quantity.classList.add('btn')
        quantity.classList.add('btn-outline-secondary')
        
        var quantityText = document.createElement('strong')
        quantityText.setAttribute('id', 'quantity')
        quantityText.textContent = '1'
        quantity.append(quantityText)
        btnGroup.append(quantity)

        var incrementBtn = document.createElement('button')
        incrementBtn.setAttribute('type', 'button')
        incrementBtn.classList.add('btn')
        incrementBtn.classList.add('btn-outline-secondary')
        incrementBtn.classList.add('incremental')
        incrementBtn.textContent = '+'
        btnGroup.append(incrementBtn)

        divQuantity.append(btnGroup)
        row.append(divQuantity)

        // set price values
        var divPrice = document.createElement('div');
        divPrice.classList.add("col-2")
        var price = document.createElement('h4')
        price.innerHTML = `[PRICE]`
        divPrice.append(price)
        row.append(divPrice)

        cart[0].prepend(row)
    }

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
    
    // on button click retrieve all data from session storage, clear it, send order to database
    $("#makeOrder").click(function(e) {
        e.preventDefault();
        alert('order placed');
        const orderIDPromise = createOrderID();
        orderIDPromise.then((json) => console.log('promise ended: ', json))
    })
})