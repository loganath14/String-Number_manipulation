function strManipulation(action) {
    const inputField = document.getElementById('stringInput'); // Use the correct ID for string input
    const resultDiv = document.querySelector('.strmani-result');
    const inputString = inputField.value;

    if (action === 'uppercase') {
        resultDiv.innerHTML = inputString.toUpperCase();
    } else if (action === 'reverse') {
        resultDiv.innerHTML = inputString.split('').reverse().join('');
    } else if (action === 'count') {
        resultDiv.innerHTML = `Character count: ${inputString.length}`;
    }
}

function numManipulation(action) {
    const inputField = document.getElementById('numberInput'); // Use the correct ID for number input
    const resultDiv = document.querySelector('.nummani-result');
    const inputNumber = parseFloat(inputField.value);

    if (isNaN(inputNumber)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    if (action === 'oddOrEven') {
        resultDiv.innerHTML = inputNumber % 2 === 0 ? "Even" : "Odd";
    } else if (action === 'squareRoot') {
        resultDiv.innerHTML = `Square root: ${Math.sqrt(inputNumber).toFixed(2)}`;
    } else if (action === 'twoDecimal') {
        resultDiv.innerHTML = `Number to 2 decimal places: ${inputNumber.toFixed(2)}`;
    }
}