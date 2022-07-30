var cal=document.querySelectorAll(".calculates");
console.log(cal);
var unitPrice=document.querySelectorAll(".unit");
console.log(unitPrice);
var input=document.querySelectorAll(".input");
console.log(input);

function calculate(){
    var x=this.parentNode.previousElementSibling.previousElementSibling.innerText
    var y=this.parentNode.previousElementSibling.firstChild.value
    var z=x*y; 
    this.parentNode.nextElementSibling.innerText=z;

    console.log(x);
    console.log(y);
    console.log(z);
    
}

function addEvent(cal) {
    cal.addEventListener("click",calculate);
    
}
cal.forEach(addEvent)