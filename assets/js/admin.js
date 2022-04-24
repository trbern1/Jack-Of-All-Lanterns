function showMessage (m) {
    const infoUI = document.getElementById('get-content-area');
    infoUI.innerHTML = '';
    infoUI.innerHTML = m;
}

function clearMenuForm () {
    document.getElementById('menu-form-id').value = '';
    document.getElementById('menu-form-name').value = '';
    document.getElementById('menu-form-price').value = '';
}

function showDiv(id, elementValue) {
    // console.log(elementValue.value)
    const buttons = document.querySelectorAll(".btn-menu-crud");
        buttons.forEach(e => {
            e.style.display = "none";
    })
    if (elementValue.value == "menu-opt-1"){
        const elements = document.querySelectorAll(".show-menu-1");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-opt-2"){
        const elements = document.querySelectorAll(".show-menu-2");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-opt-3"){
        const elements = document.querySelectorAll(".show-menu-3");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-opt-4"){
        const elements = document.querySelectorAll(".show-menu-4");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
 }