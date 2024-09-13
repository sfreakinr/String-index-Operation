const strModify = (str) =>{

    return str
            .toUpperCase()
            .split('')
            .map((char, index) => `${index}${char}`)
            .join('');
}

function mainOperation() {
    const userInput = document.getElementById('inputStr').value;
    const result = strModify(userInput);
    document.getElementById('output').textContent = result;
}