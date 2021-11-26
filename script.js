const elForm = document.querySelector("#form");
const elInput = elForm.querySelector("#input");
const elList = elForm.querySelector("#list");



elForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let elInputValue = elInput.value - 0;

    if(!isNaN(elInputValue)){
        if(elInputValue %  15 === 0){
            elList.textContent = "FizzBuzz"
        }else if(elInputValue % 3 ===0){
            elList.textContent = "Fizz"
        }else if(elInputValue % 5 === 0){
            elList.textContent = "Buzz"
        } else{
            elList.textContent = elInputValue;
        }
    }else{
        elList.textContent ="Raqam kiriting"
    }

    elInputValue = null;
})

