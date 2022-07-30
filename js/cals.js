var button = document.querySelectorAll(".calculateButton");
// console.log(button);
// var price = document.querySelectorAll(".price");
// console.log(price);
// var qty = document.querySelectorAll(".qty");
// console.log(qty);

// let a = this;
// console.log(a);



function calculate() {
    var qty = parseInt(this.parentNode.previousElementSibling.firstChild.value);
    var price = parseInt(this.parentNode.previousElementSibling.previousElementSibling.firstChild.value);
    var Totalprice = qty * price;
    console.log(Totalprice);
    this.parentNode.nextElementSibling.firstChild.innerText = Totalprice;
}

function actionevent(btn) {
    btn.addEventListener("click", calculate);
}

button.forEach(actionevent)