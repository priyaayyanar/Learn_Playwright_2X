//let block scoped

let retryCount = 0; //Global scope

retryCount = retryCount + 1; // Reassignment of let is allowed
retryCount = retryCount + 1; // Reassignment of let is allowed
console.log("Retry count in global scope: " + retryCount);

// let retryCount = 10; // Redeclare is not allowed in let keyword

let testStatus = "pending";
if (testStatus === "pending") {
    let executionTime = "10:00 AM"; // Block scope
    console.log("Test execution time inside 'if' block: " + executionTime);
}

//console.log("Trying to access 'executionTime' outside the block: " + executionTime);
//ReferenceError: executionTime is not defined

