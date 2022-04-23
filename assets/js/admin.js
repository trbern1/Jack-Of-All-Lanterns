$(document).ready(function() {
    // document.getElementById
})
function showDiv(id, elementValue) {
    console.log(elementValue.value)
    const buttons = document.querySelectorAll(".btn-menu-crud");
        buttons.forEach(e => {
            e.style.display = "none";
    })
    if (elementValue.value == "menu-get-all"){
        const elements = document.querySelectorAll(".show-1");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
    else if (elementValue.value == "menu-create"){
        const elements = document.querySelectorAll(".o2-show");
        elements.forEach(e => {
            e.style.display = "block";
        })
    }
 }