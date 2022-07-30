let button = document.querySelectorAll(".calculateButton")

function calculate() {
    let qty = parseInt(this.parentNode.previousElementSibling.firstChild.value);
    let price = parseInt(this.parentNode.previousElementSibling.previousElementSibling.firstChild.value);
    let Totalprice = qty * price;
    console.log(Totalprice);
    this.parentNode.nextElementSibling.firstChild.innerText = Totalprice;
}

function addEvent(btn) {
    btn.addEventListener("click", calculate)
}

button.forEach(addEvent)