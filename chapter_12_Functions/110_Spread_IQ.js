function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];

let sum = add(...num);
console.log(sum);

let responseCodes = [200, 300, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let result = hasError(...responseCodes);
console.log(result);