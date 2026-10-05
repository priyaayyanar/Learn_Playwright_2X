let rawResponse: unknown = {
    status: 200,
    body: {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    }
};

interface APIResponse {
    status: number;
    body: {
        name: string;
        age: number;
        email: string;
    };
}

let apiResponse = rawResponse as APIResponse;

console.log("Status: " + apiResponse.status);
console.log("Name: " + apiResponse.body.name);
console.log("Age: " + apiResponse.body.age);
console.log("Email: " + apiResponse.body.email);
