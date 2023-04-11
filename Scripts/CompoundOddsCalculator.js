let numbers = [];
var Current = document.getElementById("CurrentNO");
var Modified = false;

function decrypt() {
    const encoded = document.getElementById('encoded').value;
    const decoded = window.atob(encoded) || 1;
    const number = parseFloat(decoded);
    numbers.push(number);
    console.log(number);

    if (!Modified){
        Current.innerHTML += number;
        Modified = true;
    }else{
        Current.innerHTML += ", " + number;
    }
}

function multiply() {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    document.getElementById('product').innerText = `Total Compound Odds: 1 in ${product}`;
}