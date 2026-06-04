function retry(testName, maxTries = 3, delay = 1000) {
    console.log(`Retrying ${testName} upto ${maxTries} times, ${delay} ms apart `);
}

retry("Login Test"); // remaining 2 argumants may assigned as default parameters mentioned in the function
retry("Registration Test", 5, 2000); // default parameters will replaced with the function arguments.
