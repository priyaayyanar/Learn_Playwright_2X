enum HTTPMethod {
    Geto = "GET",
    Posto = "POST",
    Putto = "PUT",
    Deleto = "DELETE",
    Patcho = "PATCH",
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " -> 200 OK");
}

sendRequest(HTTPMethod.Geto, "/api/users");
sendRequest(HTTPMethod.Posto, "/api/users");
sendRequest(HTTPMethod.Putto, "/api/users/123");
sendRequest(HTTPMethod.Deleto, "/api/users/123");
sendRequest(HTTPMethod.Patcho, "/api/users/123");