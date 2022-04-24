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
    else if (elementValue.value == "menu-opt-5"){
        const elements = document.querySelectorAll(".show-menu-5");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-opt-6"){
        const elements = document.querySelectorAll(".show-menu-6");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-opt-7"){
        const elements = document.querySelectorAll(".show-menu-7");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-opt-8"){
        const elements = document.querySelectorAll(".show-menu-8");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-opt-9"){
        const elements = document.querySelectorAll(".show-menu-9");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-opt-10"){
        const elements = document.querySelectorAll(".show-menu-10");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
 }