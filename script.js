let userInput;
let budget = 0;
let totalAmount = 0;
let mangoQuantity = 0;
let mangoPrice = 15;

function inputValue(){
    userInput = document.querySelector("input").value;
    console.log(userInput);
    var inputItem = document.querySelector("#user-balance");
    alert("The balance you entered: " +userInput+ " PKR");
    inputItem.innerHTML = userInput;
}

function addMango() {
    if (totalAmount <= budget) {
        budget = userInput;
        document.getElementById("quantityOfMango").innerHTML = ++mangoQuantity;
        totalAmount = mangoPrice * mangoQuantity;
        document.getElementById("total").innerHTML = totalAmount;
        budget = budget - mangoPrice;
        document.getElementById("balance").innerHTML = userInput - totalAmount;
    }
    else {
        alert("You can't purchase more!")
    }
}

function subMango() {
    if (mangoQuantity > 0) {
        budget = userInput;
        document.getElementById("quantityOfMango").innerHTML = --mangoQuantity;
        totalAmount = mangoPrice * mangoQuantity;
        document.getElementById("total").innerHTML = totalAmount;
        budget = budget + mangoPrice;
        document.getElementById("balance").innerHTML = userInput - totalAmount;
    }
    else{
       alert("Please buy any fruit");
    }
}
