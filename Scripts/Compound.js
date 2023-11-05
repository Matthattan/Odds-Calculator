let numberArray = []
let inputField = document.getElementById("inputField")

document.getElementById("insertNumber").addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior (form submission)
        
        let inputValue = parseFloat(inputField.value);

        if (!isNaN(inputValue)) {
            // Input is a valid number
            numberArray.push(inputValue)
            let numberList = document.getElementById('numberList');
            numberList.innerText += ` ${inputValue}`

            // Clear the input field
            inputField.value = '';
            document.getElementById('error').textContent = '';
        } else {
            // Input is not a valid number
            document.getElementById('error').textContent = 'Please enter a valid number';
        }
});

function emptyList() {
    numberArray.length = 0
    numberList.innerHTML = "Current Odds: "
}

function calculate() {
    let product = 1;
    for (let i = 0; i < numberArray.length; i++) {
        product *= numberArray[i];
    }
    document.getElementById('product').innerText = `Total Compound Odds: 1 in ${product}`;
}
