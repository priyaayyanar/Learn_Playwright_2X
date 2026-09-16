interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;
}

let response: APIResponse = {
    body: 'Hi',
}

let response2: APIResponse = {
    body: 'Hello',
    headers: {},
    responseTime: 200
}

console.log("Response 1:", response.body);
console.log("Response 2:", response2.body, " | ", response2.headers, " | ", response2.responseTime, "ms");