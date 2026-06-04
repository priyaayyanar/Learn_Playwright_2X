// Rest of the param.
function logResult(suiteName, suiteAge, ...results) {
    console.log(suiteName);
    console.log(suiteAge);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");