// ------------------------------Lab Task 1------------------------------------

// Add function (check undefined arguments)
function add(a, b, c) {
    a = a !== undefined ? a : 0;
    b = b !== undefined ? b : 0;
    c = c !== undefined ? c : 0;
    return a + b + c;
}

// subtract function (ES6 default parameters)
function subtract(a = 0, b = 0, c = 0) {
    return a - b - c;
}

// Multiply function (rest parameters)
function multiply(...args) {
    return args.reduce((acc, val) => acc * val, 1);
}

//divide function arguments object
function divide() {
    if (arguments.length === 0) return 0;
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}

// ------------------ Example Usage ------------------
console.log("Add:", add(2, 3));          // 5
console.log("Subtract:", subtract(10, 4)); // 6
console.log("Multiply:", multiply(2, 3, 4)); // 24
console.log("Divide:", divide(20, 2, 2));   // 5
