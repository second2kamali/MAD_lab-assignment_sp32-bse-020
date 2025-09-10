// Lab Task 2

function SolveThis(obj) {
    let res = {};
    for (let key in obj) {
        let values = obj[key];
        switch (key) {
            case 'sum':
                res[key] = values.reduce((a, b) => a + b, 0);
                break;
            case 'subtract':
                res[key] = values.reduce((a, b) => a - b, 0);
                break;
            case 'multiply':
                res[key] = values.reduce((a, b) => a * b, 1);
                break;
            case 'divide':
                res[key] = values.reduce((a, b) => a / b);
                break;
            case 'max':
                res[key] = Math.max(...values);
                break;
            case 'min':
                res[key] = Math.min(...values);
                break;
            case 'round':
                res[key] = values.map(v => Math.round(v));
                break;
            case 'abs':
                res[key] = values.map(v => Math.abs(v));
                break;
            case 'ceil':
                res[key] = values.map(v => Math.ceil(v));
                break;
            case 'floor':
                res[key] = values.map(v => Math.floor(v));
                break;
            case 'random':
                res[key] = values.map(() => Math.random());
                break;
            default:
                res[key] = null;
        }
    }
    return res;
}

// ------------------ Example Usage ------------------
let result = SolveThis({
    sum: [3, 2, 4],
    max: [2, 4, 3, 5],
    min: [5, 3, 4, 3],
    round: [1.2, 3.7, 4.5],
    abs: [-1, -5, 3]
});

console.log(result);
// Output: { sum: 9, max: 5, min: 3, round: [1, 4, 5], abs: [1, 5, 3] }
