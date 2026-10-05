"use strict";
let rawResponse = {
    status: 200,
    body: {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    }
};
let apiResponse = rawResponse;
console.log("Status: " + apiResponse.status);
console.log("Name: " + apiResponse.body.name);
console.log("Age: " + apiResponse.body.age);
console.log("Email: " + apiResponse.body.email);
