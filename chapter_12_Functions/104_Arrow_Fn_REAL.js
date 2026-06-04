// Normal Function
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log('Request is fine');
    }
}
validateStatusCode(202);

// Function as an expression
const validateStatusCode1 = function (status1) {
    if (status1 >= 200 && status1 <= 300) {
        console.log('Request id fine');
    }
}
validateStatusCode1(201);

// Arrow Function
const validateStatusCode2 = status2 => {
    if (status2 >= 200 && status2 <= 300) {
        console.log('Request is fine');
    }
}
validateStatusCode2(203);