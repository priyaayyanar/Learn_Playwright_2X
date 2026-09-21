function wrapResponse<T>(statusCode: number, data: T): { statusCode: number, data: T } {
    return { statusCode: statusCode, data: data };
}

let userResponse = wrapResponse<string>(200, "User data loaded successfully");
console.log("User Response:", userResponse);

let flagResponse = wrapResponse<boolean>(200, true);
console.log("Flag Response:", flagResponse);