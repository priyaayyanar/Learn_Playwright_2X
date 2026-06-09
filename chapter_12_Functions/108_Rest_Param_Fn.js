// Rest of the param. Spread Parameters
function logResult(suiteName, suiteAge, ...results) { // array of objects. but the last one is always be "results"
    console.log(suiteName);
    console.log(suiteAge);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Priya");