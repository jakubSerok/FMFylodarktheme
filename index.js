const input = document.querySelector('#input');
const button = document.querySelector("#btn");
const text = document.querySelector(".red");

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener('click', function(){
    if(input.value.match(validRegex)){
        text.classList.remove("hidden");
    }
    else{
        text.classList.add("hidden");
    }
})