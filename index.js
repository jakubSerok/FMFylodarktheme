const input = document.querySelector('#input');
const button = document.querySelector("#btn");
const text = document.querySelector(".red");

var validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

button.addEventListener('click', function(){
    if(input.value==''){
        text.classList.remove("hidden");
    }
    else{
        text.classList.add("hidden");
    }
})