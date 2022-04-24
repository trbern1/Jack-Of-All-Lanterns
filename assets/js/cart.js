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
            // remove all items from cart first
            const cart = document.getElementsByClassName('cart');
            while(cart[0].firstChild) {
                cart[0].removeChild(cart[0].firstChild)
            }
            for (var i=1; i<itemquants.length+1; i++){
                if (itemquants[i-1] != null){
                    createCartItem(i)
                }
            }
            var incrementTags = document.querySelectorAll(".incremental")
            var decrementTags = document.querySelectorAll(".decremental")
            startListeners(incrementTags, decrementTags)
        }catch (error) {
            console.log(error);
        }
    });
    
    function createCartItem(i) {
        // add all links of images to items then based on the item value, grab the correct image
        // links must be set up to the Cart.html file not this one.
        const imageOfItems = ['./assets/images/Moist-Pumpkin-Scones.jpg', './assets/images/Pumpkin-Cake-Roll.jpg', './assets/images/Pumpkin-Bread.jpg', './assets/images/Pumpkin-Cheesecake.jpg', './assets/images/Pumpkin-Chocolate-Chip-Cookies.jpg', './assets/images/pumpkin-muffins.jpg', './assets/images/Pumpkin-Spice-Bagels.jpg', './assets/images/Traditional-Pumpkin-Pie_.jpg']

        var cart = document.getElementsByClassName("cart")

        // create each item row
        var row = document.createElement('div')
        row.classList.add('row')
        row.setAttribute('id', `item${i}-cart`);
        // create elements in each row
        
        // set image values
        var divImage = document.createElement('div');
        divImage.classList.add('col-2')
        var image = document.createElement('img');
        // list of image values and item id sets the correct one
        image.src = imageOfItems[i-1]
        image.alt = 'image of item';
        image.width = "50"
        image.height = "50"
        divImage.append(image)
        row.append(divImage)

        // set name values
        var divName = document.createElement('div');
        divName.classList.add('col-5')
        var name = document.createElement('h4')
        name.classList.add('text-warning')
        // name is set from separate call
        setItemValue(i, 2, name)
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
        price.classList.add('price')
        price.classList.add('text-warning')
        // get price values from database with get call
        setItemValue(i, 3, price)
        divPrice.append(price)
        row.append(divPrice)
        
        cart[0].prepend(row)

        // calculate and set totals
        calcTotal()
    }
    
    function incrementQuantity(increase) {
        var quantityText = increase.previousSibling.firstChild
        quantityText.textContent = parseInt(quantityText.textContent)+1
    }

    function decrementQuantity(decrease) {
        var quantityText = decrease.nextSibling.firstChild
        quantityText.textContent = parseInt(quantityText.textContent)-1
    }

    function startListeners(increments, decrements) {
        increments.forEach(incBtn => {
            incBtn.addEventListener('click', event => {
                incrementQuantity(incBtn)
                calcTotal()
            })
        })
        decrements.forEach(decBtn => {
            decBtn.addEventListener('click', event => {
                decrementQuantity(decBtn)
                calcTotal()
            })
        })
    }

    function setItemValue(itemID, key, element) {
        try {
            $.get(`http://127.0.0.1:3000/items/${itemID}`, function(item) {
                if(key == 2) {
                    element.innerHTML = item[0].name
                }
                if(key == 3) {
                    element.innerHTML = item[0].price
                }
            })
        } catch (error) {
            console.log('key is free')
        }    
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
            if(key != 'r') {
                const response = await fetch(`http://127.0.0.1:3000/order/${key}`);
                if(!response.ok) {
                    alert('key is not in database')
                }
                const json = await response.json();
            }    
        } catch (error) {
            console.log('key is free')
        }
    }

    function calcTotal() {
        try {
            var total = 0
            var subTotal = 0
            var estimatedTax = 0
            let itemquants = [sessionStorage.getItem("item1"),
            sessionStorage.getItem("item2"),sessionStorage.getItem("item3"),
            sessionStorage.getItem("item4"),sessionStorage.getItem("item5"),
            sessionStorage.getItem("item6"),sessionStorage.getItem("item7"),
            sessionStorage.getItem("item8")];
            var quantities = document.querySelectorAll('#quantity')
            var quans = []
            quantities.forEach(quan => {
                quantity = parseInt(quan.textContent)
                quans.push(quantity)
            })
            var quantityIndex = 0
            for (var i=1; i<itemquants.length+1; i++){
                if (itemquants[i-1] != null){
                    // get all prices from database based on item ids
                    $.get(`http://127.0.0.1:3000/items/${i}`, function(item) {
                        subTotal += (parseFloat(item[0].price) * parseFloat(quans[quantityIndex]))
                        quantityIndex++
                    }).done(function() {
                        estimatedTax += subTotal*0.0625
                    })
                    var quantity = document.getElementById('quantity').textContent
                    
                }
            }
            setTimeout(() => {
                estimatedTax = Math.round(estimatedTax * 100) / 100
                total = subTotal + estimatedTax + 3.22
                document.querySelector('#subtotal').innerHTML = `$${Math.round(subTotal * 100) / 100}`
                document.querySelector('#total').innerHTML = `Total:   $${Math.round(total * 100) / 100}`
                document.querySelector('#estimatedTax').innerHTML = `$${estimatedTax}`
            }, 2000)
        } catch (error) {
            console.log('key is free')
        }
    }

    // on button click retrieve all data from session storage and send order to database
    $("#makeOrder").click(function(e) {
        e.preventDefault();
        alert('order placed');
        const orderIDPromise = createOrderID();
        orderIDPromise.then((json) => {
            // get and set all values for order creation in database
            var itemIDs = []
            for(let i = 1; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                itemIDs.push(key)
            }
            // get quantities and make a post request for each item after all values are set
            var quantities = document.querySelectorAll('#quantity')
            var quans= []
            var index = 0;
            quantities.forEach(quan => {
                quantity = parseInt(quan.textContent)
                quans.push(quantity)
                var order = {
                    order_id: json,
                    item_id: itemIDs[index].slice(-1),
                    quant: quantity
                }
                if(itemIDs[index].slice(-1) != 'r') {
                    index++
                    $.post(`http://127.0.0.1:3000/orders`, order, function(data, status) {
                        console.log(`order placed:`)
                        console.log(order)
                    }).fail(function() {
                        alert('error in post request')
                    })
                }
            })
        })
        // 5 second timer to clear storage after order is placed
        setTimeout(() => {
            sessionStorage.clear()
            document.querySelector('#subtotal').innerHTML = `$0`
            document.querySelector('#total').innerHTML = `Total:   $0`
            document.querySelector('#estimatedTax').innerHTML = `$0`
        }, 5000)
    })
})