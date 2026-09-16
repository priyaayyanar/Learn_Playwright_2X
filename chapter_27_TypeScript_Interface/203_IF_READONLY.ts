interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responseTime?: number;
}

let response: APIResponse = {
    statusCode: 200,
    body: '{ "user": "Priya" }',
}

console.log("Status Code : " + response.statusCode);
console.log("Response Body : " + response.body);
console.log("Response Headers : " + response.headers);
console.log("Response Time : " + response.responseTime);

// response.statusCode = 404;   // Error: Cannot assign to 'statusCode' because it is a read-only property.
response.body = "dasdadas";
console.log("Response Body : " + response.body);